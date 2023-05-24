import Cookies from 'universal-cookie';
import { User } from '../types';

const defaultUser = 'user';
const defaultUserName = 'name';
const accessTokenItem = 'access-token-value'

const cookies = new Cookies();

const getJson = <T>(key: string) => {
    const value: T = cookies.get(key) || null;
    return value;
  };
  
  const saveJson = <T>(key: string, value: T) => {
    cookies.set(key, value);
    return value;
  };
  
  const getKeyAsString = (key: string) => {
    return cookies.get(key) || '';
  };
  
  const setValueStored = (key: string, value: string) => {
    cookies.set(key, value);
  };
  
  export const clearCredential = {
    clearData: () => cookies.remove(accessTokenItem),
  };
  
  
  export const getSavedCred = {
    user: () => getJson<User>(defaultUser),
    accessToken: () => getKeyAsString(accessTokenItem),
    accessUserName: () => getKeyAsString(defaultUserName),
  };
  
  export const cache = {
    user: (user: User) => saveJson(defaultUser, user),
    accessToken: (accessToken = '') => setValueStored(accessTokenItem, accessToken),
    accessUser: (userName = '') => setValueStored(defaultUserName, userName),
  };
  