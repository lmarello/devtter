import styles from '../styles/globals';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {styles}
      </style>
    </>
  );
}
