import "bootstrap/dist/css/bootstrap.css"
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify"
import { Layout } from "@/common/components";


export default function App({ Component, pageProps }: AppProps) {

  return (<>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    
    <ToastContainer />
    </>)
}
