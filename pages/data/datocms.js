import Head from "next/head";
import Banner from "../../components/data/banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { request } from "../../lib/datocms";
import { lightTheme, darkTheme } from "../../styles/theme";

const TEST_ITEMS_QUERY = `{
  allTests {
    id
    text
  }
}
`;

const banner = {
  title: "DatoCMS",
  text: "The API-based CMS with a customizable interface.",
  link: "https://datocms.dot.directory",
};

export default function DatoCMS({ items }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Head>
          <title>Dot | DatoCMS</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner toggleTheme={toggleTheme} theme={theme} banner={banner} />
        <div className="container">
          <ul>
            {items.allTests.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const items = await request({
    query: TEST_ITEMS_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { items },
    revalidate: 10,
  };
}
