import axios from 'axios';
import { SERVER_URL } from '@/api/url';

export const instance = axios.create({
  baseURL: SERVER_URL,
});
