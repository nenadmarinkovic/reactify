const NextJS = `
// Next.js method for fetching data

export async function getStaticProps() {
    const data = await request({
      query: HOMEPAGE_QUERY,
      variables: { limit: 10 }
    });
    return {
      props: { data }
    };
  }
`.trim();

export default NextJS;