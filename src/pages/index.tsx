import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Compare currency prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/dollar.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
        </div>
      </main>
    </>
  )
}
