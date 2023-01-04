import Head from "next/head";
import Banner from "../components/design/banner";
import Items from "../components/design/items";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/theme";
import Footer from "../components/footer";
import { request } from "../lib/datocms";

const DESIGN_ITEMS_QUERY = `{
  allItems(first: 100) {
    id
    name
    description
    category
    link
    icon {
      url
    }
  }
}
`;

export default function Home({ items }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  console.log(items);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Head>
          <title>Reactify | Design</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} />
        <Items items={items.allItems} />

        <Footer theme={theme} />
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const items = await request({
    query: DESIGN_ITEMS_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { items },
    revalidate: 10,
  };
}
