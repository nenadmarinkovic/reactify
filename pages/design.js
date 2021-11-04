import Head from "next/head";
import Banner from "../components/apis/banner";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";

import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `{
  allItems {
    id
    name
    _status
    _firstPublishedAt
  }

  _allItemsMeta {
    count
  }
}
`;

export default function Home({ data }) {
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
        <div className="container">
          {data.allItems.map((e) => {
            return <li key={e.id}>{e.name}</li>;
          })}
        </div>

        {/* <Footer theme={theme} /> */}
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
    revalidate: 10,
  }
}
