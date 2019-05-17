import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';
import Layout from './layout';

import styles from './header.module.scss';

export default function Header({ backgroundImage, children }) {
  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phoneNumber
          }
        }
        logo: file(relativePath: { eq: "lifeloop-logo.png" }) {
          childImageSharp {
            fixed(width: 180) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `,
  );

  const header = (
    <header
      className={classNames(styles.header, {
        [styles.headerImg]: backgroundImage,
      })}
    >
      <Helmet title="Senior Living Calendar and Activity Management - LifeLoop" />
      <Layout>
        <FlexContainer justify="spacebetween" className={styles.innerContainer}>
          <FlexContainer align="center">
            <Link className={styles.linkContainer} to="/">
              <Img fixed={logo.childImageSharp.fixed} />
            </Link>
            <Link className={styles.link} to="/features">
              Features
            </Link>
            <Link className={styles.link} to="/benefits">
              Benefits
            </Link>
            <Link className={styles.link} to="/our-story">
              Our Story
            </Link>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
            <Link className={styles.link} to="/contact">
              Contact Us
            </Link>
          </FlexContainer>
          <FlexContainer direction="column" align="flexend">
            <FlexContainer>
              <Link className={styles.minorLink} to="/training">
                Training
              </Link>
              <a
                className={styles.minorLink}
                href="https://ourlifeloop.com/login"
              >
                Login
              </a>
            </FlexContainer>
            <FlexContainer align="center">
              <a
                className={styles.phone}
                href={`tel:${site.siteMetadata.phoneNumber}`}
              >
                Call us: <b>{site.siteMetadata.phoneNumber}</b>
              </a>
              <Link to="/demo">
                <Button>Request a Demo</Button>
              </Link>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Layout>
    </header>
  );

  if (!backgroundImage) {
    return header;
  }

  console.log(styles.heroImage);
  return (
    <div className={styles.relativeContainer}>
      <Img className={styles.heroImage} fluid={backgroundImage} />
      {header}
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
    originalName: PropTypes.string,
  }),
};

Header.defaultProps = {
  children: undefined,
  backgroundImage: undefined,
};
