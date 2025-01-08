import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps {
  colors: string[];
  children: React.ReactNode;
  style?: any;
  [x: string]: any;
}

const GradientText = ({
  colors,
  children,
  style,
  ...rest
}: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={
        <Text {...rest} style={[style, { opacity: 0 }]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[style, { opacity: 0 }]}
      >
        <Text {...rest} style={style}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
