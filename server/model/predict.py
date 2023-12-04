from MBTI_classifier import MBTISentimentPredictor
import numpy as np
import json

# with open ('./input.json', 'r') as json_file:
#     data = json.load(json_file)

data = {'user': {'gender': 'man', 'nickname': '박찬호'}, 'answer': {'1': ["1번 질문 박찬호's 답변 1", "1번 질문 박찬호's 답변 2", "1번 질문 박찬호's 답변 3"], '2': ["2번 질문 박찬호's 답변 1", "2번 질문 박찬호's 답변 2"], '3': ["3번 질문 박찬호's 답변 1", "3번 질문 박찬호's 답변 2", "3번 질문 박찬호's 답변 3"], '4': ["4번 질문 박찬호's 답변 1"], '5': ["5번 질문 박찬호's 답변 1", "5번 질문 박찬호's 답변 2", "5번 질문 박찬호's 답변 3"], '6': ["6번 질문 박찬호's 답변 1", "6번 질문 박찬호's 답변 2"]}}

root_path = './classifier'
sentiment_model_path = 'classifier/sentimental'
# sentiment_model_path = '/server/model/sentimental'
IE_model_path = root_path + '/ei'
NS_model_path = root_path + '/ns'
TF_model_path = root_path + '/tf'
JP_model_path = root_path + '/jp'

predictor = MBTISentimentPredictor(sentiment_model_path, IE_model_path, NS_model_path, TF_model_path, JP_model_path)

answers = list(data['answer'].values())
flattened_answers = [predictor.predict(answer) for sublist in answers for answer in sublist]

IE_values = []
NS_values = []
TF_values = []
JP_values = []


for result in flattened_answers:
    IE_values.append(result['IE'])
    NS_values.append(result['NS'])
    TF_values.append(result['TF'])
    JP_values.append(result['JP'])

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

print(res)