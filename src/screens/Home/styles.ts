// useStyles.ts
import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

import { height } from '@/utils/common';

const useStyles = () => {
  const { layout, gutters, borders, backgrounds, components } = useTheme();

  const styles = {
    gridContainer: {
      ...layout.flex_1,
      ...gutters.marginHorizontal_16,
    },
    categoryCard: {
      width: '95%' as const,
      height: height / 9,
      ...gutters.marginVertical_8,
      ...components.shadowBox,
      ...borders.rounded_10,
    },
    categoryText: {
      fontSize: 10,
      marginTop: -15,
    },
  };

  return StyleSheet.create(styles);
};

export default useStyles;
