import Head from 'next/head'

import { Provider } from '@jhon-acasa/components.themes.provider'
import { Footer } from '@jhon-acasa/components.blocks.footer'

import { Header } from '@components/Header'
import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const options = [
  { title: 'Inicio', link: '/' },
  { title: 'Apartamentos', link: '/apartamentos' },
  { title: 'Agentes', link: '/agentes' },
  { title: 'Nosotros', link: '/nosotros' },
  { title: 'Blog', link: '/blog' },
]

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Acasa | Inicio</title>
        <meta name="description" content="Acasa" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider />
        <main className={styles.main}>
          <Header menuOptions={options} />
          {children}
        </main>
        <Footer />
    </>
  )
}
