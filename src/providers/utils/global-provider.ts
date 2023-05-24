import { getSavedCred } from '@/common/utils';
import axios from 'axios';
import { BASE_URL } from './base';
import { authProvider } from '../auth-provider';

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
  return axios.create({
    headers:{
      Authorization: `bearer ${getSavedCred.accessToken()}`
    },
    baseURL: BASE_URL });
};
