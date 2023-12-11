import torch
import sys
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch.nn.functional as F
import numpy as np

import json

def weighted_MBTI(dictionary,IE_weighted,NS_weighted, TF_weighted,JP_weighted):
    dictionary['IE'] = dictionary['IE'] * IE_weighted
    dictionary['NS'] = dictionary['NS'] * NS_weighted
    dictionary['TF'] = dictionary['TF'] * TF_weighted
    dictionary['JP'] = dictionary['JP'] * JP_weighted 
    return dictionary


class MBTISentimentPredictor:
    def __init__(self, sentiment_model_path, IE_model_path, NS_model_path, TF_model_path, JP_model_path):
        
        # 각 모델 및 토크나이저 로드
        self.sentimental_model = AutoModelForSequenceClassification.from_pretrained(sentiment_model_path)
        self.sentimental_tokenizer = AutoTokenizer.from_pretrained(sentiment_model_path)

        self.IE_model = AutoModelForSequenceClassification.from_pretrained(IE_model_path)
        self.IE_tokenizer = AutoTokenizer.from_pretrained(IE_model_path)

        # 나머지 모델 및 토크나이저 로드
        self.NS_model = AutoModelForSequenceClassification.from_pretrained(NS_model_path)
        self.NS_tokenizer = AutoTokenizer.from_pretrained(NS_model_path)

        self.TF_model = AutoModelForSequenceClassification.from_pretrained(TF_model_path)
        self.TF_tokenizer = AutoTokenizer.from_pretrained(TF_model_path)

        self.JP_model = AutoModelForSequenceClassification.from_pretrained(JP_model_path)
        self.JP_tokenizer = AutoTokenizer.from_pretrained(JP_model_path)

    def predict(self, text):
        # 감성 분석 결과
        sentiment_result = self.classify(text, self.sentimental_model, self.sentimental_tokenizer).squeeze()

        # TF와 IE 예측에서 감성 분석 결과 사용
        IE_result = self.classify_IE_TF(text, self.IE_model, self.IE_tokenizer, sentiment_result, is_IE=True)
        TF_result = self.classify_IE_TF(text, self.TF_model, self.TF_tokenizer, sentiment_result, is_IE=False)

        # N/S와 J/P는 감성 분석 결과를 사용하지 않음
        NS_result = self.classify(text, self.NS_model, self.NS_tokenizer)
        JP_result = self.classify(text, self.JP_model, self.JP_tokenizer)

        return {
            "IE": IE_result.squeeze(),
            "NS": NS_result.squeeze(),
            "TF": TF_result.squeeze(),
            "JP": JP_result.squeeze()
        }

    def classify(self, text, model, tokenizer):
        model.eval()

        tokenized_text = tokenizer(
            text,
            return_tensors='pt',
            truncation=True,
            add_special_tokens=True,
            max_length=64
        )
        tokenized_text = {k: v for k, v in tokenized_text.items()}

        with torch.no_grad():
            outputs = model(**tokenized_text)
        logits = outputs[0].detach().cpu()

        probabilities = F.softmax(logits, dim=-1)
        return probabilities.numpy()

    def classify_IE_TF(self, text, model, tokenizer, sentiment_result, is_IE):
        model.eval()

        tokenized_text = tokenizer(
            text,
            return_tensors='pt',
            truncation=True,
            add_special_tokens=True,
            max_length=64
        )
        tokenized_text = {k: v for k, v in tokenized_text.items()}

        with torch.no_grad():
            outputs = model(**tokenized_text)
        logits = outputs[0].detach().cpu()

        probabilities = F.softmax(logits, dim=-1)
        adjusted_probabilities = self.adjust_probabilities_with_sentiment(probabilities, sentiment_result, is_IE)

        return adjusted_probabilities.numpy()

    def adjust_probabilities_with_sentiment(self, probabilities, sentiment_result, is_IE):
        # 감성 결과에 따라 확률을 조정
        negative_sentiment, positive_sentiment = sentiment_result[0], sentiment_result[1]

        if is_IE:
            # IE의 경우 가중치 적용
            I_weight = negative_sentiment * 0.8 + positive_sentiment * 0.2
            E_weight = negative_sentiment * 0.2 + positive_sentiment * 0.8
        else:
            # TF의 경우 가중치 적용
            T_weight = negative_sentiment * 0.7 + positive_sentiment * 0.3
            F_weight = negative_sentiment * 0.3 + positive_sentiment * 0.7

        adjusted_probabilities = probabilities.clone()
        adjusted_probabilities[:, 0] *= I_weight if is_IE else T_weight
        adjusted_probabilities[:, 1] *= E_weight if is_IE else F_weight

        # 정규화
        adjusted_probabilities /= adjusted_probabilities.sum(dim=1, keepdim=True)

        return adjusted_probabilities
    
    def predict_all(self, input_data):
        # with open (json_name, 'r') as json_file:
        #     data = json.load(json_file)
        # answers = list(data['answer'].values())
        answers = list(input_data.values())

        IE_values = []
        NS_values = []
        TF_values = []
        JP_values = []
        
        weighted = [[1,1,1,1], [1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]] #첫번째 질문 ~ 여섯번째 질문에 대한 weight,
        for answer , weights in zip(answers, weighted):
            for sentence in answer:
                IE_values.append(weighted_MBTI(self.predict(sentence),weights[0], weights[1], weights[2],weights[3])['IE'])
                NS_values.append(weighted_MBTI(self.predict(sentence),weights[0], weights[1], weights[2],weights[3])['NS'])
                TF_values.append(weighted_MBTI(self.predict(sentence), weights[0], weights[1], weights[2],weights[3])['TF'])
                JP_values.append(weighted_MBTI(self.predict(sentence), weights[0], weights[1], weights[2],weights[3])['JP'])
        IE_avg = np.mean(IE_values, axis=0)
        NS_avg = np.mean(NS_values, axis=0)
        TF_avg = np.mean(TF_values, axis=0)
        JP_avg = np.mean(JP_values, axis=0)
        if IE_avg[0] > IE_avg[1]:
            IE = 'I'
        else:
            IE = 'E'
        if NS_avg[0] > NS_avg[1]:
            NS = 'N'
        else:
            NS = 'S'
        if TF_avg[0] > TF_avg[1]:
            TF = 'T'
        else:
            TF = 'F'
        if JP_avg[0] > JP_avg[1]:
            JP = 'J'
        else:
            JP = 'P'

        res = ''.join([IE,NS,TF,JP])
        return res

root_path = sys.path[0]+'/model/classifier'
sentiment_model_path = root_path + '/sentimental'
IE_model_path = root_path + '/ei'
NS_model_path = root_path + '/ns'
TF_model_path = root_path + '/tf'
JP_model_path = root_path + '/jp'
model = MBTISentimentPredictor(sentiment_model_path, IE_model_path, NS_model_path, TF_model_path, JP_model_path)

def get_model():
    return model
