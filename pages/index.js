import Head from 'next/head';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ruang gatherloop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card title="Posts" link="/posts" />
        <Card title="Users" link="/users" />
      </main>
    </div>
  );
}
