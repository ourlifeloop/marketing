import CMS from 'netlify-cms-app';

import '../styles/global.scss';

import BlogPostTemplate from '../templates/blog-post';

CMS.registerPreviewTemplate('blog', BlogPostTemplate);
