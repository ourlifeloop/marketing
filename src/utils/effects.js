import { useState, useEffect, useRef } from 'react';

import { debounce } from './lodash';

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useWindowPosition = ({ lessThan } = {}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const onScroll = evt => {
      const { scrollY } = evt.currentTarget;
      if (!lessThan || scrollY <= lessThan) {
        setPosition(scrollY);
      } else if (position !== lessThan) {
        setPosition(lessThan);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return position;
};

export const useResize = cb =>
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('resize', cb);
    return () => window.removeEventListener('resize', cb);
  }, []);

export const useDimensions = () => {
  if (typeof window === 'undefined') {
    return { width: 2000, height: 2000 };
  }
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
  const isMini = width <= 500;
  const isDesktop = !isTablet;
  return { isMini, isTablet, isMobile, isDesktop };
};
