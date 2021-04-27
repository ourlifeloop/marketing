import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';

import BlogSubscriber from '../components/blog-subscriber';
import SiteWrapper from '../components/site-wrapper';
import BlogPost from '../components/blog-post';

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post, site } = data;
  const { frontmatter, html, fields } = post;
  const { title, photo } = frontmatter;
  return (
    <SiteWrapper title={`LifeLoop - ${title}`} canonical={fields.slug}>
      <BlogPost
        {...frontmatter}
        postUrl={`${site.siteMetadata.displayUrl}${fields.slug}`}
        html={<div dangerouslySetInnerHTML={{ __html: html }} />}
        photo={!!photo && <GatsbyImage image={photo.childImageSharp.gatsbyImageData} />}
      />
      <BlogSubscriber />
    </SiteWrapper>
  );
}

export const query = graphql`query BlogPostByPath($postId: String!) {
  markdownRemark(id: {eq: $postId}) {
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
          gatsbyImageData(quality: 80, layout: FULL_WIDTH)
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
