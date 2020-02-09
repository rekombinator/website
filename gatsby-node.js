

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const result = await 
    graphql(
      `
      {
        allDatoCmsArticle {
            edges {
                node {
                    slug,
                    title
                }
            }
        }
    }
   `
  );

  const articles = result.data.allDatoCmsArticle.edges;
  const articleTemplate = require.resolve('./src/templates/article.js');

  articles.forEach(({node}, index) => {
    const {slug} = node;
    createPage({
      path: 'blog/' + slug,
      component: articleTemplate,
      context: {
        slug
      }
    })
  })
};