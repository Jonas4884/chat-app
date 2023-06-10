import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SignInPage from './login'
import { Layout } from '@/common/components'
import { getSavedCred } from '@/common/utils'
import { GetServerSidePropsContext } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
      <div></div>
    </Layout>
    </>
  )
}
export const  getServerSideProps = async (context: GetServerSidePropsContext) =>{
  const req = context.req.cookies
  const token = getSavedCred.accessToken()
  if (!req.key) {
    return {
      redirect: {
        destination: '/login',
        permanent: true,
      },
    };
  }
  // Continue with rendering the protected page if logged in
  return {
    props: {
    },
  };
}
