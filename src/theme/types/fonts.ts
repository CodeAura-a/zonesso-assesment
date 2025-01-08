import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import type { UnionConfiguration } from './config';
import type { config } from '@/theme/_config';
import type { staticFontStyles } from '@/theme/fonts';

type FontSizesKeys = `size_${ArrayValue<typeof config.fonts.sizes>}`;

export type FontSizes = {
  [key in FontSizesKeys]: {
    fontSize: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type FontColorsKeys = `${keyof UnionConfiguration['fonts']['colors']}`;

export type FontColors = {
  [key in FontColorsKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['colors']
    ? {
        color: UnionConfiguration['fonts']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

type LineHeightKeys =
  `lineHeight_${ArrayValue<typeof config.fonts.lineHeight>}`;
export type LineHeights = {
  [key in LineHeightKeys]: {
    lineHeight: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type Fonts = FontColors &
  FontSizes &
  LineHeights &
  typeof staticFontStyles;
