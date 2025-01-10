// useStyles.ts
import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

import { height, width } from '@/utils/common';

const useStyles = () => {
  const { layout, gutters, borders, backgrounds } = useTheme();

  const styles = {
    container: {
      ...layout.flex_1,
      ...gutters.paddingLeft_16,
      ...gutters.marginTop_16,
    },
    list: {
      ...gutters.paddingBottom_16,
    },
    card: {
      width: width / 2.6,
      ...gutters.marginRight_12,
      ...gutters.marginTop_8,
    },
    image: {
      width: '100%' as const,
      height: 120,
      borderRadius: 8,
    },
    cardContent: {
      ...gutters.marginLeft_8,
    },
  };

  return StyleSheet.create(styles);
};

export default useStyles;
