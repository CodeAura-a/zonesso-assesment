import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/theme/types/theme';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AllStyle
  extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

export default ({ backgrounds, fonts, layout, borders }: ComponentTheme) => {
  return {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      borderRadius: 35,
      height: 64,
      width: 64,
    },
    shadowBox: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10, // Main shadow offset
      },
      shadowOpacity: 0.08, // Main shadow opacity
      shadowRadius: 4, // Main shadow radius
      // Adding a smaller shadow on iOS (this doesn't stack but shows concept)
      shadowOffsetSmall: {
        width: 3,
        height: 2,
      },
      shadowOpacitySmall: 0.05,
      shadowRadiusSmall: 5,
      // Android Shadow
      elevation: 24,
      ...borders.rounded_4,
      backgroundColor: '#ffffff',
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
  } as const satisfies AllStyle;
};
