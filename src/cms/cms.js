import CMS from 'netlify-cms-app';

import BlogPostPreview from './preview-templates/blog-post-preview';

import '../styles/global.scss';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
