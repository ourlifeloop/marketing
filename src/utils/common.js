import { endsWith, trimEnd } from '../utils/lodash';

export const removeTrailingSlash = pathname =>
  endsWith(pathname, '/') ? trimEnd(pathname, '/') : pathname;
