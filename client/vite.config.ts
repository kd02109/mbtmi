/* eslint-disable @typescript-eslint/no-explicit-any */
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    (react as any)({
      // JSX 컴파일 시 기본 jsx-runtime 대신 Emotion의 jsx 함수를 사용하도록 설정
      // JSX에서 css prop을 사용하기 위함
      jsxImportSource: '@emotion/react',
      // 커스텀 바벨 설정: @emotion-babel-plugin 플러그인 추가
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
  ],
  resolve: { alias: [{ find: '@', replacement: '/src' }] },
});
