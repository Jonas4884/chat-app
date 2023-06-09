import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSavedCred } from '../utils';

export const useAuthenticate = () => {
  const { push, pathname } = useRouter();
  const [isLoading, setLoading] = useState(true);
  const accessToken = getSavedCred?.accessToken();
  useEffect(() => {
    setLoading(true);
     
      if (pathname !== '/login' && pathname !== '/signup' && accessToken === null) {
      push('/login');
    } else if ((pathname === '/login' || pathname === '/signup') && accessToken !== null) {
      push(pathname);
    }
    const timeoutId = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeoutId);
    }, 500);
  }, [accessToken]);
  return isLoading;
};
