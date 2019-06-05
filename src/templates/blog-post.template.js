import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import BlogSubscriber from '../components/blog-subscriber';
import SiteWrapper from '../components/site-wrapper';
import BlogPost from '../components/blog-post';

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post, site } = data;
  const { frontmatter, html, fields } = post;
  const { title, photo } = frontmatter;
  return (
    <SiteWrapper>
      <BlogPost
        {...frontmatter}
        helmet={<Helmet title={`LifeLoop - ${title}`} />}
        postUrl={`${site.siteMetadata.displayUrl}${fields.slug}`}
        html={<div dangerouslySetInnerHTML={{ __html: html }} />}
        photo={<Img fluid={photo.childImageSharp.fluid} />}
      />
      <BlogSubscriber />
    </SiteWrapper>
  );
}

export const query = graphql`
  query BlogPostByPath($postId: String!) {
    markdownRemark(id: { eq: $postId }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        photo {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        displayUrl
      }
    }
  }
`;
