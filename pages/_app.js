import styles from "styles/globals"
import PropTypes from "prop-types"
import Head from "next/head"
import { AppLayout } from "components/AppLayout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Devtter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <style jsx global>
        {styles}
      </style>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
}

export default MyApp
