import { ImageStyle, StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

const useStyles = () => {
  const { layout, gutters, borders, backgrounds } = useTheme();

  const styles = {
    dotContainer: {
      ...layout.row,
      ...layout.selfCenter,
      //   ...gutters.marginTop_16,
    },
    dot: {
      ...borders.rounded_4,
      ...gutters.margin_4,
      width: 20,
      height: 4,
    },
    details: {
      ...layout.row,
      ...gutters.marginTop_16,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      ...gutters.padding_8,
      ...borders.rounded_4,
      ...borders.w_1,
      ...borders.gray100,
      ...backgrounds.qua400,
    },
    header: {
      ...layout.row,
      ...layout.justifyBetween,
      ...gutters.paddingHorizontal_20,
      ...gutters.marginTop_20,
    },
    slide: {
      height: 144,
      width: '80%' as const,

      ...borders.rounded_4,
      ...backgrounds.tertiary100,
    },
  };

  return StyleSheet.create(styles);
};

export default useStyles;
