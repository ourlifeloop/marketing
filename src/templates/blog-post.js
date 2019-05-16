import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post } = data;
  return (
    <>
      <Header />
      <Layout>
        <Helmet title={`LifeLoop - ${post.frontmatter.title}`} />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query BlogPostByPath($pathQuery: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathQuery } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
