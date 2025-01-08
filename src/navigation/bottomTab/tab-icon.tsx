import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

import { useTheme } from '@/theme';

import { AssetByVariant, ZonImage, ZonText } from '@/components/atoms';

interface TabIconProps {
  source: ImageSourcePropType; // Supports both local and remote images.
  name: string; // Ensures name is provided.
  focused: boolean; // Determines active state styling.
  pStyle?: object; // Optional custom styles.
}

export const TabIcon: React.FC<TabIconProps> = ({
  source,
  name,
  focused,
  pStyle = {},
}) => {
  const { colors, gutters, fonts } = useTheme();

  // Ensure `source` and `name` are valid.
  if (!source || !name) {
    console.error('Invalid `source` or `name` passed to TabIcon.');
    return null;
  }

  const POST = name === 'Post';

  console.log('TabIcon source type:', typeof source); // Debugging info.

  return (
    <View style={styles.container}>
      {/* Render the image */}
      <Image
        source={source}
        style={[
          {
            height: POST ? 36 : focused ? 32 : 24,
            width: POST ? 36 : focused ? 32 : 24,
          },
          pStyle,
        ]}
        tintColor={
          !POST ? (focused ? colors.red500 : colors.gray900) : undefined
        }
      />

      {/* Render the text */}
      <ZonText
        variant={POST ? 'black' : focused ? 'black' : 'sub'}
        color={POST ? 'red500' : focused ? 'red500' : 'txt'}
      >
        {name}
      </ZonText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 24,
    width: 24,
  },
});
