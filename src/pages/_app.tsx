import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { ThemeProvider } from "@material-ui/styles";
import { Provider, useSelector } from "react-redux";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import "./_app.css";
import "react-multi-carousel/lib/styles.css";
import store from "../store";
import withRedux from "next-redux-wrapper";
import moment from "moment"
import MomentUtils from "@date-io/moment"
import Loading from "../components/layout/Loading";
import "nprogress/nprogress.css";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function MyApp({ Component, pageProps }) {
  const { isLoading } = useSelector((state: any) => state.user)
  const TopProgressBar = dynamic(
    () => {
      return import("../components/general/TopProgressBar");
    },
    { ssr: false }
  );
 
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []); 

  return (
    <>
      <Head>
        <title>Theta Brasil</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider
                libInstance={moment}
                utils={MomentUtils}
                locale={moment.locale()}
            >
          {isLoading && <Loading />}
          <GlobalStyle />
          <TopProgressBar />
          <Component {...pageProps} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
