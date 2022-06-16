import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import Head from 'next/head';
import makeStore from '@/app-redux';

const store = makeStore();

const AppComponent = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <AppComponent Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default MyApp
