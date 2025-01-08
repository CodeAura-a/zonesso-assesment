// import { fontsTitle, FontVariant } from '@/types/theme/fontsStyles';

import useTheme from './hooks/useTheme';

const {
  colors,
  variant,
  changeTheme,
  layout,
  gutters,
  fonts,
  components,
  backgrounds,
} = useTheme();

export const fontVariants: Record<fontsTitle, FontVariant> = {
  listHeader: [fonts.size_16, fonts.lineHeight_22, fonts.fontFamily_ExtBold],
  sub: [fonts.size_12, fonts.lineHeight_16, fonts.fontFamily_semiBold],
  sub2: [fonts.size_10, fonts.lineHeight_14, fonts.fontFamily_Medium],
  black: [fonts.size_12, fonts.lineHeight_16, fonts.fontFamily_black],
  black2: [fonts.size_16, fonts.lineHeight_22, fonts.fontFamily_black],

  H1: [fonts.size_16, fonts.lineHeight_22, fonts.fontFamily_Bold],

  H2: [fonts.size_36, fonts.lineHeight_44, fonts.fontFamily_Regular],
  H3: [fonts.size_32, fonts.lineHeight_39, fonts.fontFamily_Regular],
  H4: [fonts.size_28, fonts.lineHeight_34, fonts.fontFamily_Regular],
  H5: [fonts.size_24, fonts.lineHeight_29, fonts.fontFamily_Regular],
  //   SH1: [fonts.size_20, fonts.lineHeight_24, fonts.fontFamily_Medium_outFit],
  SH2: [fonts.size_18, fonts.lineHeight_22, fonts.fontFamily_Regular],
  P1: [fonts.size_18, fonts.lineHeight_22, fonts.fontFamily_Regular],
  P2: [fonts.size_16, fonts.lineHeight_24, fonts.fontFamily_Regular],
  P3: [fonts.size_14, fonts.lineHeight_17, fonts.fontFamily_Regular],
  CAPTION: [fonts.size_12, fonts.lineHeight_14, fonts.fontFamily_Regular],
  OVERLINE: [fonts.size_10, fonts.lineHeight_12, fonts.fontFamily_Regular],
  CTA_LINK: [
    fonts.size_16,
    fonts.lineHeight_19,
    fonts.fontFamily_Medium,
    fonts.underline,
  ],
  CTAs: [fonts.size_16, fonts.lineHeight_19, fonts.fontFamily_Medium],
  CTA_SMALL: [fonts.size_14, fonts.lineHeight_17, fonts.fontFamily_Medium],
  LABEL: [fonts.size_12, fonts.lineHeight_14, fonts.fontFamily_Medium],
  PLACEHOLDER: [fonts.size_15, fonts.lineHeight_18, fonts.fontFamily_Regular],
  ASSISTIVE: [fonts.size_12, fonts.lineHeight_14, fonts.fontFamily_Regular],
  INTER: [fonts.size_8, fonts.lineHeight_12, fonts.fontFamily_Regular],
};
