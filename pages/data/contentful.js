import Head from "next/head";
import Banner from "../../components/data/cms-banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import client from "../../lib/contentful";
import { lightTheme, darkTheme } from "../../styles/theme";
import Posts from "../../components/data/posts";
import Footer from "../../components/footer";

const banner = {
  title: "Contentful",
  text: "API-first, cloud-native SaaS for complex and diverse business needs.",
  link: "https://app.contentful.com",
};

const stats = {
  speed: 7,
  design: 8,
  customization: 5,
  experience: 10,
  usability: 7,
};

export default function Contentful({ items }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Head>
          <title>Dot | Contentful</title>
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
        <Posts contentful={items} title={banner.title} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.getEntries();

  return {
    props: {
      items: data.items,
    },
    revalidate: 10,
  };
};
