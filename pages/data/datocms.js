import Head from "next/head";
import Banner from "../../components/data/banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import client from "../../lib/sanity";
import { lightTheme, darkTheme } from "../../styles/theme";
const queryPosts = `*[_type == "post"]`;

const banner = {
  title: "DatoCMS",
  text: "The API-based CMS with a customizable interface."
};

export default function Sanity({ posts }) {
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
            {posts.map((post) => (
              <li key={post._id}>{post.title}</li>
            ))}
          </ul>
        </div>
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
