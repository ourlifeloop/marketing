import { useState, useEffect, useRef } from 'react';

import { debounce } from './lodash';

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useScrollPosition = ({ lessThan } = {}) => {
  const [position, setPosition] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const onScroll = evt => {
      const { scrollTop } = evt.currentTarget;
      if (!lessThan || scrollTop <= lessThan) {
        setPosition(scrollTop);
      } else if (position !== lessThan) {
        setPosition(lessThan);
      }
    };
    ref.current.addEventListener('scroll', onScroll);
    return () => ref.current.removeEventListener('scroll', onScroll);
  }, []);

  return [ref, position];
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
