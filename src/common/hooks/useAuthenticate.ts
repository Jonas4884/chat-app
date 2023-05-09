import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCached } from '../utils';

export const useAuthenticate = () => {
  const { push, pathname } = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const user = getCached?.user();
    if (pathname === null || pathname === '/') {
      if (user === null) {
        push('/signup');
      } else {
        push('/login');
      }
    } else if (
      pathname !== '/login' &&
      pathname !== '/signup' &&
      user === null
    ) {
      push('/signup');
    } else if (
      (pathname === '/login' || pathname === '/signup') &&
      user !== null
    ) {
      push('/login');
    }
    const timeoutId = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeoutId);
    }, 3000);
  }, [pathname, push]);
  return isLoading;
};
