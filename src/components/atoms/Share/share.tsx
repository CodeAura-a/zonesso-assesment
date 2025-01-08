import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
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
    const handlePress = () => {
        console.log("share the product");
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
            <ZonSvg
                name="share"
                size={size}
                color={isActive ? 'white' : color}
            />
        </Pressable>
    );
};
