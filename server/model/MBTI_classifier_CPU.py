import torch
import sys
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch.nn.functional as F
import onnx
import onnxruntime as ort
import json
import numpy as np

class MBTISentimentPredictor:
    def __init__(self, IT_model_path, NS_model_path,JP_model_path, onnx_IT_path, onnx_NS_path, onnx_JP_path):
        self.device = torch.device("cuda:0" if torch.cuda.is_available() else 'cpu')

        self.IT_model = ort.InferenceSession(onnx_IT_path)
        self.IT_tokenizer = AutoTokenizer.from_pretrained(IT_model_path)

        # 나머지 모델 및 토크나이저 로드
        self.NS_model = ort.InferenceSession(onnx_NS_path)
        self.NS_tokenizer = AutoTokenizer.from_pretrained(NS_model_path)

        self.JP_model = ort.InferenceSession(onnx_JP_path)
        self.JP_tokenizer = AutoTokenizer.from_pretrained(JP_model_path)

    def predict(self, text):

        # TF와 IE 예측에서 감성 분석 결과 사용
        IT_result = self.classify(text, self.IT_model, self.IT_tokenizer)
        # N/S와 J/P는 감성 분석 결과를 사용하지 않음
        NS_result = self.classify(text, self.NS_model, self.NS_tokenizer)
        JP_result = self.classify(text, self.JP_model, self.JP_tokenizer)

        return {
            "IT": IT_result.squeeze(),
            "NS": NS_result.squeeze(),
            "JP": JP_result.squeeze()
        }

    def classify(self, text, model, tokenizer):

        tokenized_text = tokenizer(
            text,
            return_tensors='pt',
            padding = 'max_length',
            truncation=True,
            add_special_tokens=True,
            max_length=64
        )

        input_ids = tokenized_text['input_ids'].numpy()
        attention_mask = tokenized_text['attention_mask'].numpy()

        outputs = model.run(
            None,
            {
                'input_ids': input_ids,
                'attention_mask': attention_mask
            }
        )
        probabilities = F.softmax(torch.tensor(outputs[0]), dim=-1)
        return probabilities.numpy()

    def predict_all(self, input_data):
        answers = input_data

        IT_number = [2,4]
        NS_number = [1,2,3]
        JP_number = [2,4,6]

        IT_value = []
        NS_value = []
        JP_value = []
        print('*'*50)
        print(' '.join(answers[1]))

        for number in JP_number:
          JP_value.append(self.predict(' '.join(answers[number]))['JP'])
        print('okay JP')
        for number in IT_number:
          IT_value.append(self.predict(' '.join(answers[number]))['IT'])
        print('okay IT')
        for number in NS_number:
          NS_value.append(self.predict(' '.join(answers[number]))['NS'])


        IT_avg = np.mean(IT_value[:1],axis = 0)
        NS_avg = np.mean(NS_value,axis = 0)
        JP_avg = np.mean(JP_value,axis = 0)

        IT_max_number = np.argmax(IT_avg)
        NS_max_number = np.argmax(NS_avg)
        JP_max_number = np.argmax(JP_avg)

        IT = ['IT','IF','ET','EF'][IT_max_number]
        NS = ['N','S'][NS_max_number]
        JP = ['J','P'][JP_max_number]

        res = IT[0] + NS + IT[1] + JP
        return res

root_path = sys.path[0]+'/model/classifier'
onnx_path = sys.path[0]+'/model/onnx'

IE_model_path = root_path + '/IT2'
NS_model_path = root_path + '/NS2'
TF_model_path = root_path + '/TF2'
JP_model_path = root_path + '/JP2'
onnx_IE_path = onnx_path + '/IE_model_quantized.onnx'
onnx_NS_path = onnx_path + '/NS_model_quantized.onnx'
onnx_TF_path = onnx_path + '/TF_model_quantized.onnx'
onnx_JP_path = onnx_path + '/JP_model_quantized.onnx'

model = MBTISentimentPredictor(IT_model_path, NS_model_path, JP_model_path, onnx_IT_path, onnx_NS_path, onnx_JP_path)

def get_model():
    return model


