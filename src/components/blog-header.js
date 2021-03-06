import React from 'react';
import { Link, navigate } from 'gatsby';
import Select from 'react-select';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import { removeTrailingSlash } from '../utils/common';
import { useDevice } from '../utils/effects';
import { find } from '../utils/lodash';

import {
  select,
  link,
  linkActive,
  container,
  containerVertical,
} from './blog-header.module.scss';

const BLOG_TYPES = [
  { label: 'Latest', value: '/blog/latest' },
  { label: 'Customer Spotlight', value: '/blog/customer-spotlight' },
  { label: 'Industry Insights', value: '/blog/industry-insights' },
  { label: 'Case Studies', value: '/blog/case-studies' },
  { label: 'News', value: '/blog/news' },
];

export default function BlogHeader({ pathname }) {
  const { isMini, isMobile } = useDevice();
  let links;
  if (isMobile) {
    links = (
      <Select
        className={select}
        options={BLOG_TYPES}
        value={find(BLOG_TYPES, { value: removeTrailingSlash(pathname) })}
        onChange={({ value }) => navigate(value)}
      />
    );
  } else {
    links = (
      <FlexContainer align="center">
        {BLOG_TYPES.map(({ label, value }) => (
          <Link
            key={value}
            to={value}
            partiallyActive
            className={link}
            activeClassName={linkActive}
          >
            {label}
          </Link>
        ))}
      </FlexContainer>
    );
  }
  return (
    <FlexContainer
      align="center"
      direction={isMini ? 'column' : 'row'}
      justify="spacebetween"
      className={classNames(container, {
        [containerVertical]: isMini,
      })}
    >
      <h1>The Loop</h1>
      {links}
    </FlexContainer>
  );
}
