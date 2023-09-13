# vite-TS template
- typeScript를 기반으로 하는 vite 템플릿 입니다. 
- SPA, CRA 특징을 가진 React에서 기본으로 사용한다고 생각하는 라이브러리를 미리 설정했습니다. 현재 설정한 라이브러리는 다음과 같습니다.

## 사용 방법
- 사용 방법은 아래와 같습니다. 
   1. [degit](https://github.com/Rich-Harris/degit) 레포지토리에 방문하여 안내를 따릅니다. 명령어를 통해 degit을 전역적으로 설치합니다.
   ```
      npm install -g degit
   ```
   2. 프로젝트를 시작하고자하는 폴더로 이동한 뒤 설치하고자 하는 template을 다음과 같이 설치합니다.
   ```
   npx degit kd02109/vite-typescript-template
   ```
   3. 성공적으로 수행된 경우 관련 라이브러리를 모두 설치합니다.
   ```
    npm i
    yarn install
   ```

## Library
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react router"/>
<img src="	https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
<img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="reactquery"/>
<img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white" alt="react-hook-form">
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="esling">
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite">


## lint 설정
- lint 설정에서 강제로 lint 검사를 수행하기 위해 lint-staged를 설정하였습니다.
- 추가적으로 prettier 설정과 eslint-plugin-import 설정을 추가하였습니다.
