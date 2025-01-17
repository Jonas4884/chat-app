import { ReactNode } from 'react';
import { useAuthenticate } from '../hooks';
import NextNProgress from 'nextjs-progressbar';

type LayoutProps = {
  children: ReactNode | string;
};
export const Layout = (props: LayoutProps) => {
  const isLoading = useAuthenticate();

  return (
    <>
       <NextNProgress />
      {isLoading ? (
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...
          </span>
      </div>
      ) : (
        
        props.children
      )}
    </>
  );
};
