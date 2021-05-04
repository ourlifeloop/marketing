import React from 'react';
import classNames from 'classnames';

import { container } from './relative-container.module.scss';

export default function RelativeContainer({ children, className, ...rest }) {
  return (
    <div {...rest} className={classNames(container, className)}>
      {children}
    </div>
  );
}
