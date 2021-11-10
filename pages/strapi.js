import Head from "next/head";
import Banner from "../components/apis/banner";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";

export default function Home({ articles, error }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Head>
          <title>Dot Directory</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} />
        <div>
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

Home.getInitialProps = async (ctx) => {
  try {
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
      "Content-Type": "application/json",
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
  } catch (error) {
    return {
      error,
    };
  }
};
