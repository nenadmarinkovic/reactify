import Head from "next/head";
import Banner from "../../components/data/banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import Posts from "../../components/data/posts";
import { useTheme } from "../../hooks/useTheme";
import { lightTheme, darkTheme } from "../../styles/theme";
import Footer from "../../components/footer";

const banner = {
  title: "Strapi",
  text: "Open source Node.js Headless CMS to easily build customisable APIs.",
  link: "http://strapi.dot.directory/admin",
};

const server = "https://dot-strapi.herokuapp.com";

export default function Strapi({ articles }) {
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
          <title>Dot | Strapi</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} banner={banner} />
        <Posts strapi={articles} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${server}/articles`);
  const articles = await res.json();

  return {
    props: { articles },
    revalidate: 10,
  };
}
