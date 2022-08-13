import { Fragment, useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import "../styles/globals.css";
import "./style.sass";
import "../styles/globals.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SERVER_URL = "https://cuacuonserver.herokuapp.com";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(() => false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {loading ? (
        <div className="content">
          <div className="loading">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </Fragment>
  );
}

export default MyApp;
