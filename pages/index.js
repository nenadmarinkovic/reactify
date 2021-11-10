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

export default function Home({ items, playing }) {
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
        <Intro />
        <Design items={items.allItems} />
        <Data globalTheme={theme} />
        <Apis playing={playing} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const server = dev
    ? "http://localhost:3000/api/playing"
    : "https://dot.directory/api/playing";
  const res = await fetch(server);
  const playing = await res.json();

  const items = await request({
    query: DESIGN_ITEMS_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { items, playing },
    revalidate: 10,
  };
}
