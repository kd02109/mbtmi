'use client';
import { useRef } from 'react';
export function useDebounce<T extends any[]>(
  callback: (...params: T) => void,
  time: number,
) {
  // 타이머의 ID를 관리할 ref 객체
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  // callback에 디바운스 기능을 추가한 함수(클로저)
  // 이 함수는 클로저기 때문에 호출할 때마다 동일한 timerId를 참조할 수 있다.
  // 따라서 현재 작동중인 타이머가 있는지 없는지 확인할 수 있음
  return (...params: T) => {
    // 현재 작동 중인 타이머의 ID가 있는지 체크
    // 있으면 타이머 종료시키기 (함수가 한 번 더 호출됐기 때문에 다시 타이머 재야됨)

    if (timerId.current) clearTimeout(timerId.current);

    // 타이머를 만들고 타이머의 ID를 ref 객체에 저장
    timerId.current = setTimeout(() => {
      // 정해진 time 지나면 callback 실행하고 타이머 폐기(ref 초기화)
      callback(...params);
      timerId.current = null;
    }, time);
  };
}
