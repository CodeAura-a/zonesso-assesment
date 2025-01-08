// import { fontsTitle, FontVariant } from '@/types/theme/fontsStyles';

import useTheme from './hooks/useTheme';
import { fontsTitle, FontVariant } from './types/fontStyles';

const { fonts } = useTheme();

export const fontVariants: Record<fontsTitle, FontVariant> = {
  listHeader: [fonts.size_16, fonts.lineHeight_22, fonts.fontFamily_ExtBold],
  sub: [fonts.size_12, fonts.lineHeight_16, fonts.fontFamily_semiBold],
  sub2: [fonts.size_10, fonts.lineHeight_14, fonts.fontFamily_Medium],
  black: [fonts.size_12, fonts.lineHeight_16, fonts.fontFamily_black],
  black2: [fonts.size_16, fonts.lineHeight_22, fonts.fontFamily_black],
  button: [fonts.size_14, fonts.lineHeight_34, fonts.fontFamily_ExtBold],
  h1: [fonts.size_16, fonts.lineHeight_39, fonts.fontFamily_Bold],
};
