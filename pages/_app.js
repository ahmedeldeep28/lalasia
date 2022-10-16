/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Router from 'next/router';
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/index'
import Layout from "../components/layout/Layout"
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart",() => {
    NProgress.start();
  })
  Router.events.on("routeChangeComplete",() => {
    NProgress.done();
  })

  return <>
    <Head>
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  </>
}

export default MyApp
