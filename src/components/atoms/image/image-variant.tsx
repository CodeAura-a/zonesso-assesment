import React from 'react';
import FastImage, {
  FastImageProps,
  Source as FastImageSource,
} from 'react-native-fast-image';

type ImageVariantProps = Omit<FastImageProps, 'source'> & {
  source: string | number | FastImageSource | undefined; // Allow numbers (local images), objects, or undefined.
  resizeMode?: FastImageProps['resizeMode']; // Optional resize mode with default fallback.
};

const ImageVariant: React.FC<ImageVariantProps> = ({
  source,
  resizeMode = 'contain',
  ...props
}) => {
  // Ensure `source` is valid to prevent crashes.
  if (!source) {
    console.error('Invalid source passed to ImageVariant:', source);
    return null; // Gracefully return null for undefined or invalid sources.
  }

  return <FastImage source={source} resizeMode={resizeMode} {...props} />;
};

export default ImageVariant;
