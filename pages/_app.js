import { Fragment } from 'react'
import Head from "next/head"
import '../styles/globals.css'
import "./style.sass"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
