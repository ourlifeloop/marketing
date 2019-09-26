import { endsWith, trimEnd } from '../utils/lodash';

import DocIcon from '../assets/icons/file-type-doc.svg';
import JpgIcon from '../assets/icons/file-type-jpg.svg';
import PdfIcon from '../assets/icons/file-type-pdf.svg';
import PngIcon from '../assets/icons/file-type-png.svg';
import PptIcon from '../assets/icons/file-type-ppt.svg';

export const iconForExtension = extension => {
  switch (extension) {
    case 'pdf':
      return PdfIcon;
    case 'jpg':
    case 'jpeg':
      return JpgIcon;
    case 'png':
      return PngIcon;
    case 'ppt':
    case 'pptx':
      return PptIcon;
    default:
      return DocIcon;
  }
};

export const removeTrailingSlash = pathname =>
  endsWith(pathname, '/') ? trimEnd(pathname, '/') : pathname;

export const getParameterByName = name => {
  const url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const createDownload = ({ url, fileName }) => {
  const a = document.createElement('a');
  a.setAttribute('download', fileName);
  a.href = url;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
};
