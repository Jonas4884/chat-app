import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';

type LayoutProps = {
  children: ReactNode | string;
};
export const Layout = (props: LayoutProps) => {
  const isLoading = useAuthenticate();

  return (
    <>
      {isLoading ? (
        <div >
          Loading ...
        </div>
      ) : (
        props.children
      )}
    </>
  );
};
