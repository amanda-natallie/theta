import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import "./_app.css";
import "react-multi-carousel/lib/styles.css";
import store from "../store";
import withRedux from "next-redux-wrapper";

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

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
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}
const makeStore = () => store;

export default withRedux(makeStore)(MyApp);