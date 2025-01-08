import React, { useState } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { useTheme } from '@/theme';
import { config } from '@/theme/_config';
import { fontVariants } from '@/theme/fontsStyles';
import { fontsTitle } from '@/theme/types/fontStyles';

interface TextComponentProps extends TextProps {
  variant?: fontsTitle; // Variant prop can be 'listHeader', 'sub', 'black', sub2 'black2', 'button', 'h1',
  color?: keyof typeof config.fonts.colors;
  fontFamily?: 'regular' | 'medium' | 'bold' | 'outfit_medium';
}

const TextComponent: React.FC<TextComponentProps> = ({
  variant = 'sub', // Default to 'H1' if variant is not provided or invalid
  style,
  color = 'txt',
  children,
  fontFamily,
  ...props
}) => {
  const { fonts } = useTheme();

  // Determine variant styles
  const variantStyles: TextStyle[] =
    fontVariants[variant as fontsTitle] || fontVariants['sub'];
  const colorStyle: TextStyle = color ? fonts[color] : {};
  const fontFamilyStyle: TextStyle =
    fontFamily === 'regular'
      ? fonts.fontFamily_Regular
      : fontFamily === 'medium'
        ? fonts.fontFamily_Medium
        : fontFamily === 'bold'
          ? fonts.fontFamily_Bold
          : {};

  return (
    <Text
      style={[...variantStyles, colorStyle, fontFamilyStyle, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextComponent;
