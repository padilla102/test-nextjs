import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Layout } from '@components/Layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Hola soy Next js desde Vercel</h1>
    </Layout>  
  )
}

export default Home
