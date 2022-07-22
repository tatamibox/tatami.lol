import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" /></Head>
      <div className='is-flex is-justify-content-center'>

        <a href='/random'><Card background='#ffcdb2'><h2 className={styles.card__header}>Random Champ Generator 💅</h2>
          <p className='mt-6'>Don't know which champ to pick?</p>
          <p className='mt-6 has-text-weight-bold'>Click here.</p></Card></a>
      </div>
    </>
  )
}
