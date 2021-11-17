import Head from "next/head";
import Banner from "../components/data/banner";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";

import Footer from "../components/footer";

const banner = {
  title: "About",
  text: "Introduction to the projects.",
};

export default function Home({}) {
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
          <title>Dot Directory | About</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} banner={banner} />

        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}
