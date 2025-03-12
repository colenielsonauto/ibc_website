'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ClientImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

export default function ClientImage({ 
  src, 
  alt, 
  fill = false, 
  className = '', 
  sizes,
  objectFit,
  objectPosition
}: ClientImageProps) {
  const [error, setError] = useState(false);

  const style = {
    objectFit,
    objectPosition,
  };

  return (
    <Image
      src={error ? '/img/team/placeholder.jpg' : src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      onError={() => setError(true)}
      style={style}
    />
  );
} 