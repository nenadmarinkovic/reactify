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
  link: "https://sanity.reactify.org",
};

const stats = {
  speed: 4,
  design: 6,
  customization: 8,
  experience: 9,
  usability: 10,
};

export default function Sanity() {
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
          <title>Reactify | {banner.title}</title>
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

       
        <Posts title={banner.title} />

         {/* TODO: Fix error with Sanity CMS */}

         <div className="container">
          <span className="no-data">Error occured while fetching data.</span>
        </div>

        <Footer />
      </ThemeProvider>
    </>
  );
}
