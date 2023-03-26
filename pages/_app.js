import App from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";
import Router from "next/router";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <PageTransition timeout={100} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </>
    );
  }
}
