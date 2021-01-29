import Head from 'next/head';
import { AppLayout } from '../components/AppLayout';

export default function Home() {
  return (
    <AppLayout>
      <Head>
        <title>devtter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </AppLayout>
  );
}
