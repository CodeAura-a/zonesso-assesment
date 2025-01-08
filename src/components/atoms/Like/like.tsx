import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { ZonSvg } from '@/components/atoms';

interface IconButtonProps {
    size?: number;
    color?: string;
    backgroundColor?: string;
    onPress?: () => void;
    style?: ViewStyle;
    isActive?: boolean;
}

export const LikeButton: React.FC<IconButtonProps> = ({
    size = 20,
    color = 'white',
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
                    backgroundColor: isActive ? 'red' : backgroundColor,
                    padding: 8,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: pressed ? 0.8 : 1,
                },
                style,
            ]}
        >
            <ZonSvg
                name="heart"
                size={size}
                color={isActive ? 'white' : color}
            />
        </Pressable>
    );
};
