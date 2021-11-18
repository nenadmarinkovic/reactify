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
  const parseJSON = (resp) => (resp.json ? resp.json() : resp);
  const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }
    return parseJSON(resp).then((resp) => {
      throw resp;
    });
  };

  const headers = {
    // Insecure, use only for testing
    
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Content-Security-Policy": "upgrade-insecure-requests", 
  };

  const articles = await fetch("http://strapi.dot.directory/articles", {
    method: "GET",
    headers,
  })
    .then(checkStatus)
    .then(parseJSON);

  return {
    articles,
  };
};
