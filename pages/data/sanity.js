import Head from "next/head";
import Banner from "../../components/data/cms-banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import client from "../../lib/sanity";
import { lightTheme, darkTheme } from "../../styles/theme";
import Posts from "../../components/data/posts";
import Footer from "../../components/footer";

const queryPosts = `*[_type == "post"]`;

const banner = {
  title: "Sanity",
  text: "Highly versatile and adaptable platform for structured content.",
  link: "https://sanity.dot.directory",
};

const stats = {
  speed: 4,
  design: 6,
  customization: 8,
  experience: 9,
  usability: 10,
};

export default function Sanity({ posts }) {
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
          <title>Dot | {banner.title}</title>
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
        <Posts sanity={posts} title={banner.title} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await client.fetch(queryPosts);

  return {
    props: {
      posts: posts || null,
    },
    revalidate: 10,
  };
};
