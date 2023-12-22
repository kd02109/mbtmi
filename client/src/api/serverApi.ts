'use server';
import { cache } from 'react';
import { END_POINT, SERVER_URL } from '@/api/url';

async function getUserNumber() {
  try {
    const response = await fetch(`${SERVER_URL}${END_POINT.userNumber}`);
    const data: { number: number } = await response.json();
    return data.number;
  } catch {
    return 25000;
  }
}

export default cache(getUserNumber);
