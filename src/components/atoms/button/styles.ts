import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

const useStyles = () => {
  const { colors, backgrounds, gutters, fonts } = useTheme();

  return StyleSheet.create({
    primaryText: {
      color: colors.white,
    },
    outlined: {
      borderWidth: 1,
    },

    pressed: {
      opacity: 0.7,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    iconView: {
      height: 24,
      width: 24,
    },
  });
};

export default useStyles;
