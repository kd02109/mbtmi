import { cache } from 'react';
import { END_POINT, SERVER_URL } from '@/api/url';

async function getUserNumber() {
  const response = await fetch(`${SERVER_URL}${END_POINT.userNumber}`);
  const data = await response.json();
  return data;
}

export default cache(getUserNumber);
