import Head from "next/head";
import Banner from "../../components/data/banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { lightTheme, darkTheme } from "../../styles/theme";

const banner = {
  title: "Strapi",
  text: "Open source Node.js Headless CMS to easily build customisable APIs.",
  link: "http://strapi.dot.directory/admin",
};

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
        <div className="container">
          <ul>
            {articles.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ul>
        </div>
      </ThemeProvider>
    </>
  );
}

Strapi.getInitialProps = async (ctx) => {
  const res = await fetch("http://strapi.dot.directory/articles");
  const data = await res.json();

  return {
    articles: data,
  };
};
