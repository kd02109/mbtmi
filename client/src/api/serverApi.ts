'use server';
import { cache } from 'react';
import { instance } from '@/api/axios';
import { END_POINT } from '@/api/url';

async function getUserNumber() {
  try {
    const response = await instance(`${END_POINT.userNumber}`);
    return response.data;
  } catch {
    return 2500;
  }
}

export default cache(getUserNumber);
