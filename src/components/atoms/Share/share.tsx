import React from 'react';
import { Pressable, Share, ViewStyle } from 'react-native';

import { ZonSvg } from '@/components/atoms';

interface IconButtonProps {
  size?: number;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  isActive?: boolean;
}

export const ShareButton: React.FC<IconButtonProps> = ({
  size = 20,
  color = 'black',
  backgroundColor = 'black',
  style,
  isActive = false,
}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this cool app! Download it here: https://apps.apple.com/us/app/zonesso/id6541539876',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  const handlePress = () => {
    onShare();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          backgroundColor: isActive ? 'red' : backgroundColor,
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
      <ZonSvg name="share" size={size} color={isActive ? 'white' : color} />
    </Pressable>
  );
};
