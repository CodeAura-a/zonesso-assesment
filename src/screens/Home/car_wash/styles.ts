// useStyles.ts
import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

const useStyles = () => {
  const { layout, gutters, borders, backgrounds, components, fonts } =
    useTheme();

  const styles = {
    container: {},
    headerText: {
      ...fonts.size_16,
      ...fonts.fontFamily_Bold,
      ...fonts.lineHeight_34,
      ...gutters.marginLeft_16,
    },
    list: { ...gutters.paddingBottom_16 },
    card: {
      marginBottom: 16,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    gradient: { width: '100%', height: 150 },
    image: { width: '100%', height: '100%' },
    cardContent: { padding: 8 },
    cardTitle: { fontSize: 18, fontWeight: 'bold' },
    cardDistance: { fontSize: 14, color: '#666' },
    tagsContainer: { flexDirection: 'row', marginTop: 8 },
    tag: {
      fontSize: 12,
      color: '#fff',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      marginRight: 8,
    },
  };

  return StyleSheet.create(styles);
};

export default useStyles;
