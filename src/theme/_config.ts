import type { ThemeConfiguration } from '@/theme/types/config';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const enum Variant {
  DARK = 'dark',
}

const colorsLight = {
  gray100: '#DFDFDF',
  gray200: '#EAECF0',
  gray300: '#D0D5DD',
  gray400: '#4D4D4D',
  gray900: '#101828',
  gray600: '#475467',
  gray500: '#667085',
  gray50: '#EFEFEF',
  gray800: '#1D2939',
  purple100: '#E1E1EF',
  purple50: '#1B1A23',
  purple500: '#44427D',
  red500: '#F04438',
  danger500: '#F04438',
  danger300: '#FDA29B',
  danger100: '#FFEEED',
  skeleton: '#A1A1A1',
  white: '#FFFFFF',
  black: '#000000',
  txt: '#101828',
} as const;

const colorsDark = {
  gray100: '#000000',
  gray200: '#BABABA',
  gray400: '#969696',
  gray50: '#EFEFEF',
  gray800: '#E0E0E0',
  purple100: '#252732',
  purple50: '#1B1A23',
  purple500: '#A6A4F0',
  red500: '#F04438',
  skeleton: '#303030',
} as const;

const sizes = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80,
] as const;

const fontSize = [
  8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 28, 32, 36, 40,
] as const;
const lineHeight = [
  12, 14, 16, 17, 18, 19, 22, 24, 29, 34, 39, 44, 48,
] as const;

export const config = {
  backgrounds: colorsLight,
  borders: {
    colors: colorsLight,
    radius: sizes,
    widths: sizes,
  },
  colors: colorsLight,
  fonts: {
    colors: colorsLight,
    sizes: fontSize,
    lineHeight,
  },
  gutters: sizes,
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.gray50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      backgrounds: colorsDark,
      borders: {
        colors: colorsDark,
      },
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
