import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
