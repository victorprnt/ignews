import Head from 'next/head'
import { Header } from '../components/Header'
import { SubscribeButton } from '../components/SubscribeButton';

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>

    <Header />

    <main className={styles.homeContainer}>
      <section className={styles.homeContent}>
        <span>Hey, welcome</span>
        <h1>
          News about <br/>
          the <span>React</span> world
        </h1>
        <p>
          Get access to all the publications <br/>
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt=""/>
    </main>

    </>
  );
}
