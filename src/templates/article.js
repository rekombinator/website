import React from "react";
import {graphql} from "gatsby";

const Article = ({ pageContext: { slug }, data: { article } }) => {
  
  console.log('slug', slug, 'article', article);
  return (
    <div>
      <h2> {article.title} </h2>
      <h6>{article.content}</h6>

    </div>
  )
};

export default Article;


export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsArticle(slug: {eq: $slug}) {
            id,
            slug,
            content,
            title
        }
    }
`;