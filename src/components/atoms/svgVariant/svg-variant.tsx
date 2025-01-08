import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import * as svgs from '@/theme/assets/svgs';

interface IconProps extends SvgProps {
  name: keyof typeof svgs;
  viewStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  size?: number;
  svgStyle?: React.CSSProperties;
}

const Svg: React.FC<IconProps> = ({
  name,
  size = 24,
  viewStyle,
  svgStyle,
  onPress,
  ...rest
}) => {
  const SVGIcon = svgs[name];
  if (!SVGIcon) return null;

  return (
    <>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <View
            style={[
              {
                height: size,
                width: size,
                justifyContent: 'center',
                alignItems: 'center',
              },
              viewStyle,
            ]}
          >
            <SVGIcon
              widths={'100%'}
              height={'100%'}
              {...rest}
              style={{ aspectRatio: 1, ...svgStyle }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            {
              height: size,
              width: size,
              justifyContent: 'center',
              alignItems: 'center',
            },
            viewStyle,
          ]}
        >
          <SVGIcon
            width={'100%'}
            height={'100%'}
            {...rest}
            style={{ aspectRatio: 1, ...svgStyle }}
          />
        </View>
      )}
    </>
  );
};

export default Svg;
