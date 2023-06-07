import "bootstrap/dist/css/bootstrap.css"
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify"


export default function App({ Component, pageProps }: AppProps) {

  return (<>
    <Component {...pageProps} />
    <ToastContainer />
    </>)
}
