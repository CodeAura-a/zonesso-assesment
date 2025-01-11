import React, { useState } from 'react';
import { Pressable, ViewStyle } from 'react-native';

import { ZonSvg } from '@/components/atoms';

interface IconButtonProps {
  size?: number;
  backgroundColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
  isActive?: boolean;
}

export const LikeButton: React.FC<IconButtonProps> = ({
  size = 20,
  backgroundColor = 'black',
  onPress,
  style,
  isActive = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: 'black',
          padding: 8,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.8 : 1,
          zIndex: 50,
        },
        style,
      ]}
    >
      {/* {isActive ? ( */}
      {/* // <ZonSvg name="red_heart" size={size} /> */}
      {/* ) : ( */}
      <ZonSvg name="white_heart" size={size} />
      {/* )} */}
    </Pressable>
  );
};
