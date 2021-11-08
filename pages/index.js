import Head from "next/head";
import Banner from "../components/banner";
import Tech from "../components/tech";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import Intro from "../components/intro";
import Data from "../components/data";
import Apis from "../components/apis";
import Design from "../components/design";
import Footer from "../components/footer";

export default function Home() {
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
          <title>Dot Directory</title>
          <meta
            name="description"
            content="Personal web directory for design, data, APIs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} />
        <Tech theme={theme} />
        <Intro theme={theme} />
        <Design theme={theme} />

        <Data globalTheme={theme} />
        <Apis theme={theme} />
        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}
