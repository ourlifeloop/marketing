import React from 'react';
import { graphql } from 'gatsby';

import SiteWrapper from '../components/site-wrapper';
import CareerPost from '../components/career-post';

export default function CareerTemplate({ data }) {
  const { markdownRemark: career, site } = data;
  const { frontmatter, html, fields } = career;
  const { title } = frontmatter;
  return (
    <SiteWrapper title={`LifeLoop Careers - ${title}`} canonical={fields.slug}>
      <CareerPost
        {...frontmatter}
        careerEmail={site.siteMetadata.careers}
        careerUrl={`${site.siteMetadata.displayUrl}${fields.slug}`}
        html={<div dangerouslySetInnerHTML={{ __html: html }} />}
      />
    </SiteWrapper>
  );
}

export const query = graphql`
  query CareerPostByPath($careerId: String!) {
    markdownRemark(id: { eq: $careerId }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        link
        responsibilities
      }
    }
    site {
      siteMetadata {
        displayUrl
        careers
      }
    }
  }
`;
