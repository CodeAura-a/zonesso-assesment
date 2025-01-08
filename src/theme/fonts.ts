import type { TextStyle } from 'react-native';
import type { UnionConfiguration } from '@/theme/types/config';
import type { FontColors, FontSizes, LineHeights } from '@/theme/types/fonts';

import { config } from '@/theme/_config';

export const generateFontColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.fonts.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          color: value,
        },
      });
    },
    {} as FontColors,
  );
};

export const generateFontSizes = () => {
  return config.fonts.sizes.reduce((acc, size) => {
    return Object.assign(acc, {
      [`size_${size}`]: {
        fontSize: size,
      },
    });
  }, {} as FontSizes);
};

export const generateFontLineHeights = () => {
  return config.fonts.lineHeight.reduce((acc, lineHeight, index) => {
    return Object.assign(acc, {
      [`lineHeight_${config.fonts.sizes[index]}`]: {
        lineHeight: lineHeight,
      },
    });
  }, {} as LineHeights);
};

export const staticFontStyles = {
  bold: {
    fontWeight: 'bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  alignCenter: {
    textAlign: 'center',
  },
  fontFamily_Regular: {
    fontFamily: 'Nunito-Regular',
  },
  fontFamily_Bold: {
    fontFamily: 'Nunito-Bold',
  },
  fontFamily_Medium: {
    fontFamily: 'Nunito-Medium',
  },
  fontFamily_ExtBold: {
    fontFamily: 'Nunito-ExtraBold',
  },
  fontFamily_black: {
    fontFamily: 'Nunito-Black',
  },
  fontFamily_semiBold: {
    fontFamily: 'Nunito-SemiBold',
  },
} as const satisfies Record<string, TextStyle>;
