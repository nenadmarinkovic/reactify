import Head from "next/head";
import Banner from "../../components/data/cms-banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { request } from "../../lib/datocms";
import { lightTheme, darkTheme } from "../../styles/theme";
import Posts from "../../components/data/posts";
import Footer from "../../components/footer";

const TEST_ITEMS_QUERY = `{
  allTests(orderBy: _createdAt_ASC) {
    id
    text
    description
    image {
      url
    }
  }
}
`;

const banner = {
  title: "DatoCMS",
  text: "The API-based CMS with a customizable interface.",
  link: "https://datocms.dot.directory",
};

const stats = {
  speed: 6,
  design: 9,
  customization: 9,
  experience: 10,
  usability: 6,
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
        <Banner
          toggleTheme={toggleTheme}
          theme={theme}
          banner={banner}
          stats={stats}
        />
        <Posts datocms={items.allTests} title={banner.title} />
        <Footer />
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
