'use client';

export default function changeKrTime(time: string) {
  const [hour, minute] = time.split(':').map(Number);
  const addZero = (value: number) => value.toString().padStart(2, '0');
  if (hour > 12) return `오후 ${addZero(hour - 12)}:${addZero(minute)}`;

  return `${addZero(hour)}:${addZero(minute)}`;
}
