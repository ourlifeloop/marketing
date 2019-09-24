import React from 'react';
import dayjs from 'dayjs';

import BlogPost from '../../components/blog-post';

export default function BlogPostPreview({ widgetFor, entry }) {
  return (
    <BlogPost
      html={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      date={dayjs(entry.getIn(['data', 'date'])).format('MMMM DD, YYYY')}
      author={entry.getIn(['data', 'author'])}
      photo={
        <img
          style={{ width: '100%' }}
          src={entry.getIn(['data', 'photo'])}
          alt="Preview"
        />
      }
    />
  );
}
