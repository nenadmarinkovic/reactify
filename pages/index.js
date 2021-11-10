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

import { request } from "../lib/datocms";

const DESIGN_ITEMS_QUERY = `{
  allItems {
    id
    name
    description
    category
    homepage
    link
    icon {
      url
    }
  }
}
`;

const dev = process.env.NODE_ENV !== "production";

export default function Home({ items, error, data }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      {error && <p>{error}</p>}
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
        <Intro />
        <Design items={items.allItems} />
        <Data globalTheme={theme} />
        <Apis data={data} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  let data = [];
  let error = "";

  const server = "https://dot.directory/api/playing";

  try {
    const res = await fetch(server, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });

    data = await res.json();
  } catch (e) {
    error = e.toString();
  }

  const items = await request({
    query: DESIGN_ITEMS_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { items, data },
    revalidate: 10,
  };
}
