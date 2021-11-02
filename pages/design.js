import Head from "next/head";
import Banner from "../components/apis/banner";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";


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
          <title>Dot Directory</title>
          <meta
            name="description"
            content="Personal web directory for data, APIs, and design"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} />
      
        {/* <Footer theme={theme} /> */}
      </ThemeProvider>
    </>
  );
}

