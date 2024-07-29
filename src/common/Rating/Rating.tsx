// src/components/RatingStars.tsx
import React from 'react';
import ReactStars from 'react-stars';
import { RatingStarsProps } from '../types';


const RatingStars: React.FC<RatingStarsProps> = ({
  count,
  value,
  size = 22,
  color2 = '#FFA500',
  edit = false,
}) => {
  return (
    <ReactStars
      count={count}
      value={value}
      size={size}
      color2={color2}
      edit={edit}
    />
  );
};

export default RatingStars;
