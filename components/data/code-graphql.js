const GraphQL = `
// Fetch data example in you Next.js page

const HOMEPAGE_QUERY = \`{
    allItems {
      id
      name
      _status
      _firstPublishedAt
    }
  }
`.trim();

export default GraphQL;