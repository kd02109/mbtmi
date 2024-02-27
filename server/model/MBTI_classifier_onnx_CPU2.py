import torch
import sys
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch.nn.functional as F
import onnxruntime as ort
import numpy as np

class MBTISentimentPredictor:
    def __init__(self, IE_model_path, NS_model_path,TF_model_path,JP_model_path, onnx_IE_path, onnx_NS_path, onnx_TF_path,onnx_JP_path):
        self.device = torch.device("cuda:0" if torch.cuda.is_available() else 'cpu')

        self.IE_model = ort.InferenceSession(onnx_IE_path)
        self.IE_tokenizer = AutoTokenizer.from_pretrained(IE_model_path)

        # 나머지 모델 및 토크나이저 로드
        self.NS_model = ort.InferenceSession(onnx_NS_path)
        self.NS_tokenizer = AutoTokenizer.from_pretrained(NS_model_path)

        self.TF_model = ort.InferenceSession(onnx_TF_path)
        self.TF_tokenizer = AutoTokenizer.from_pretrained(TF_model_path)

        self.JP_model = ort.InferenceSession(onnx_JP_path)
        self.JP_tokenizer = AutoTokenizer.from_pretrained(JP_model_path)

    def predict_IE(self, text):
        IE_result = self.classify(text, self.IE_model, self.IE_tokenizer)

        return {
            "IE": IE_result.squeeze()
        }
    def predict_NS(self, text):
        NS_result = self.classify(text, self.NS_model, self.NS_tokenizer)

        return {
            "NS": NS_result.squeeze()
        }

    def predict_TF(self, text):
        TF_result = self.classify(text, self.TF_model, self.TF_tokenizer)

        return {
            "TF": TF_result.squeeze()
        }

    def predict_JP(self, text):
        JP_result = self.classify(text, self.JP_model, self.JP_tokenizer)

        return {
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

    def predict_all(self, json_name):

        answers = json_name

        IE_number = [2,4]
        NS_number = [1,5]
        TF_number = [1,3]
        JP_number = [2,5,6]

        IE_value = []
        NS_value = []
        TF_value = []
        JP_value = []

        for number in IE_number:
            IE_value.append(self.predict_IE(' '.join(answers[number]))['IE'])
        for number in NS_number:
            NS_value.append(self.predict_NS(' '.join(answers[number]))['NS'])
        for number in TF_number:
            TF_value.append(self.predict_TF(' '.join(answers[number]))['TF'])
        for number in JP_number:
            JP_value.append(self.predict_JP(' '.join(answers[number]))['JP'])

        IE_avg = np.mean(IE_value, axis = 0)
        NS_avg = np.mean(NS_value, axis = 0)
        TF_avg = np.mean(TF_value, axis = 0)
        JP_avg = np.mean(JP_value, axis = 0)

        # IE_max_number = np.argmax(IE_avg)
        # JP_max_number = np.argmax(JP_avg)

        if IE_avg[0] > 0.45:
            IE = 'I'
        else:
            IE = 'E'
        if NS_avg[0] > 0.4:
            NS = 'N'
        else:
            NS = 'S'
        if TF_avg[0] > 0.4:
            TF = 'T'
        else:
            TF = 'F'
        if JP_avg[0] > 0.35:
            JP = 'J'
        else:
            JP = 'P'

        # IE = ['I' ,'E']
        # JP = ['J' ,'P']

        res = IE + NS + TF + JP
        return res

root_path = sys.path[0]+'/model/classifier'
onnx_path = sys.path[0]+'/model/onnx'
IE_model_path = root_path + '/IE2'
NS_model_path = root_path + '/NS2'
TF_model_path = root_path + '/TF2'
JP_model_path = root_path + '/JP2'
onnx_IE_path = onnx_path + '/IE_model_quantized.onnx'
onnx_NS_path = onnx_path + '/NS_model_quantized.onnx'
onnx_TF_path = onnx_path + '/TF_model_quantized.onnx'
onnx_JP_path = onnx_path + '/JP_model_quantized.onnx'

model = MBTISentimentPredictor(IE_model_path, NS_model_path, TF_model_path, JP_model_path, onnx_IE_path, onnx_NS_path, onnx_TF_path, onnx_JP_path)

def get_model():
    return model