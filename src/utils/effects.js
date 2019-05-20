import { useState, useEffect } from 'react';

import { debounce } from './lodash';

export const useResize = cb =>
  useEffect(() => {
    window.addEventListener('resize', cb);
    return () => window.removeEventListener('resize', cb);
  }, []);

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useResize(
    debounce(
      () =>
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      50,
    ),
  );
  return dimensions;
};

export const useDevice = () => {
  const { width } = useDimensions();
  const isTablet = width <= 1100;
  const isMobile = width <= 700;
  return { isTablet, isMobile, isDesktop: !isTablet && !isMobile };
};
