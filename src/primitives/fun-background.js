import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { canvasElement } from './fun-background.module.scss';
import { random } from '../utils/lodash';

const DENSITY_MOD = 1.2;

const getPixelRatio = () => {
  if (typeof document === 'undefined' || !document.createElement) {
    return 1;
  }
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

const getRandomPosition = (checkPosition, width, height, ratio) => {
  const isValidPosition = ({ x, y }) => {
    if (!checkPosition) {
      return x && y;
    }
    const innerWidth = Math.min(850 * ratio, width - 54 * ratio);
    const sideWidth = (width - innerWidth) / 2;
    return (
      x &&
      y &&
      (x <= sideWidth ||
        x >= 850 * ratio + sideWidth ||
        y >= height - 60 * ratio ||
        y <= 140 * ratio)
    );
  };

  let position = { x: 0, y: 0 };
  while (!isValidPosition(position)) {
    position = { x: random(0, width), y: random(0, height) };
  }
  return position;
};

export default function FunBackground({ width, height, checkPosition }) {
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

    const numItems = Math.max(
      Math.floor((width * height) / (20000 / DENSITY_MOD)),
      3,
    );
    const numCircles = Math.floor(numItems / 2);

    for (let i = 0; i < numCircles; i += 1) {
      // Generate circle
      const { x, y } = getRandomPosition(
        checkPosition,
        ratioWidth,
        ratioHeight,
        ratio,
      );
      ctx.beginPath();
      ctx.strokeStyle = '#D1D5D9';
      ctx.lineWidth = 3 * ratio;
      ctx.arc(x, y, 4 * ratio, 0, 2 * Math.PI);
      ctx.stroke();
    }

    const PLUS_SIZE = 4 * ratio;
    for (let i = 0; i < numItems - numCircles; i += 1) {
      // Generate plus
      const { x, y } = getRandomPosition(
        checkPosition,
        ratioWidth,
        ratioHeight,
        ratio,
      );
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
  }, [width, height, ratio, checkPosition]);

  if (!height || !width) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <canvas
      ref={canvas}
      width={width * ratio}
      height={height * ratio}
      className={canvasElement}
      style={{ width, height }}
    />
  );
}

FunBackground.propTypes = {
  checkPosition: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
};

FunBackground.defaultProps = {
  checkPosition: false,
  height: 0,
  width: 0,
};
