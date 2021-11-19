import Head from "next/head";
import Banner from "../../components/data/cms-banner";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import Posts from "../../components/data/posts";
import { useTheme } from "../../hooks/useTheme";
import { lightTheme, darkTheme } from "../../styles/theme";
import Footer from "../../components/footer";

import { GraphQLClient } from "graphql-request";

const banner = {
  title: "GraphCMS",
  text:
    "GraphCMS gives you instant GraphQL Content APIs to create, enrich, unify, and deliver your content across platforms.",
  link: "https://app.graphcms.com",
};

const server = process.env.GRAPHQL_URL_ENDPOINT;

const graphcms = new GraphQLClient(server);

export default function GraphCMS({ posts }) {
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
          <title>Dot | GraphCMS</title>
          <meta
            name="description"
            content="Web directory for design, data, APIs."
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </Head>

        <Banner toggleTheme={toggleTheme} theme={theme} banner={banner} />
        <Posts graphcms={posts} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await graphcms.request(
    `
    query Posts() {
      posts {
        id
        title
        description
        image {
          url
        }
      }
    }
  `
  );

  return {
    props: {
      posts,
    },
  };
}
