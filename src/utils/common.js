import { endsWith, trimEnd } from '../utils/lodash';

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
