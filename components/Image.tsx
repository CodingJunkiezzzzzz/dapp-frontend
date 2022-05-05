import Image from 'next/image';
import React from 'react';
interface ImageProps {
  src?: any;
  alt?: string;
  width?: string;
  height?: string;
}
const loader = ({ src, width }: any) => {
  return `${src}?w=${width}`;
};

const ImageWrapper = ({ src, width, height, alt }: ImageProps) => {
  return (
    <Image loader={loader} src={src} alt={alt} width={width} height={height} />
  );
};

export default ImageWrapper;
