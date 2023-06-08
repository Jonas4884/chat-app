import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSavedCred } from '../utils';

export const useAuthenticate = () => {
  const { push, pathname } = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const accessToken = getSavedCred?.accessToken();
    if (pathname === null || pathname === '/') {
      if (accessToken === null) {
        push('/login');
      } else {
        push('/channel');
      }
    } else if (pathname !== '/login' && pathname !== '/signup' && accessToken === null) {
      push('/login');
    } else if ((pathname === '/login' || pathname === '/signup') && accessToken !== null) {
      push('/channel');
    }
    const timeoutId = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeoutId);
    }, 500);
  }, [pathname, push]);
  return isLoading;
};
