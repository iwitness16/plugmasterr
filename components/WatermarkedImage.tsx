import React from 'react';

interface WatermarkedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  noWatermark?: boolean;
}

export default function WatermarkedImage({ 
  src, 
  alt, 
  className = '', 
  noWatermark: _noWatermark,
  ...props 
}: WatermarkedImageProps) {
  return <img src={src} alt={alt} className={className} {...props} />;
}
