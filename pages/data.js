import Head from "next/head";
import Banner from "../components/data/banner";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import Items from "../components/data/items";
import Footer from "../components/footer";

const banner = {
  title: "Data",
  text:
    "A list of commonly used Content Management Systems that makes content accessible via a REST or GraphQL API for display on any device. With real data fetching for testing speed, UI and UX design.",
};

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
          <title>Dot Directory | Data</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} banner={banner} />
        <Items theme={theme} />
        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}
