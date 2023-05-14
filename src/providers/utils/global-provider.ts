import { getSavedCred } from '@/common/utils';
import axios from 'axios';
import { BASE_URL } from './base';

export const userLogRequest = () => {
  const accessToken = getSavedCred.accessToken();
  if (!accessToken) {
    throw new Error('No corresponsant user');
  }
  return axios.create({
    headers: {
      Authorization: 'bearer ',
    },
    baseURL: BASE_URL,
  });
};

export const userRequest = () => {
  return axios.create({ baseURL: BASE_URL });
};
