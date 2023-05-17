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
  return axios.create({
    headers:{
      Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbGluLm1hc2tAdGVzdC5jb20iLCJpYXQiOjE2ODQyMjI2NjJ9.7VLW9UqoX6wX24CSF5LmfUsmBnMpw42urZ7HyiZu1Zw'
    },
    baseURL: BASE_URL });
};
