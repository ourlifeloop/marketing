import React, { useEffect, useRef } from 'react';

import styles from './fun-background.module.scss';
import { random } from '../utils/lodash';

const DENSITY_MOD = 20000;

const getPixelRatio = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
  return dpr / bsr;
};

const getRandomPosition = (width, height, ratio) => {
  const isValidPosition = ({ x, y }) => {
    const innerWidth = Math.min(850 * ratio, width - 54 * ratio);
    const sideWidth = (width - innerWidth) / 2;
    return (
      x &&
      y &&
      (x <= sideWidth ||
        x >= 850 * ratio + sideWidth ||
        y >= height - 60 * ratio ||
        y <= 145 * ratio)
    );
  };

  let position = { x: 0, y: 0 };
  while (!isValidPosition(position)) {
    position = { x: random(0, width), y: random(0, height) };
  }
  return position;
};

export default ({ width, height }) => {
  const canvas = useRef();
  const ratio = getPixelRatio();

  useEffect(() => {
    if (!width || !height || !canvas.current) {
      return;
    }

    const ctx = canvas.current.getContext('2d');

    // Background
    ctx.fillStyle = '#f6f8fa';
    const ratioWidth = width * ratio;
    const ratioHeight = height * ratio;
    ctx.rect(0, 0, ratioWidth, ratioHeight);
    ctx.fill();

    const numItems = Math.max(Math.floor((width * height) / DENSITY_MOD), 3);
    const numCircles = Math.floor(numItems / 2);

    for (let i = 0; i < numCircles; i += 1) {
      // Generate circle
      const { x, y } = getRandomPosition(ratioWidth, ratioHeight, ratio);
      ctx.beginPath();
      ctx.strokeStyle = '#D1D5D9';
      ctx.lineWidth = 6;
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.stroke();
    }

    const PLUS_SIZE = 8;
    for (let i = 0; i < numItems - numCircles; i += 1) {
      // Generate plus
      const { x, y } = getRandomPosition(ratioWidth, ratioHeight, ratio);
      ctx.beginPath();
      ctx.strokeStyle = '#9EDE42';
      ctx.lineCap = 'round';
      ctx.moveTo(x, y - PLUS_SIZE);
      ctx.lineTo(x, y + PLUS_SIZE);
      ctx.stroke();
      ctx.moveTo(x - PLUS_SIZE, y);
      ctx.lineTo(x + PLUS_SIZE, y);
      ctx.stroke();
    }
  }, [width, height, ratio]);

  return (
    <canvas
      ref={canvas}
      width={width * ratio || 0}
      height={height * ratio || 0}
      className={styles.canvas}
      style={{ width, height }}
    />
  );
};
