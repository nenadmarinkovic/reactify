import Head from "next/head";
import Banner from "../components/apis/banner";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import Items from "../components/apis/items";

export default function Home({ items }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Head>
          <title>Dot Directory | APIs</title>
          <meta
            name="description"
            content="Personal web directory for design, data, APIs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} />
        <Items items={items.entries} theme={theme} />
        {/* <Footer theme={theme} /> */}
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.publicapis.org/entries`);
  const items = await res.json();

  if (!items) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items },
  };
}
