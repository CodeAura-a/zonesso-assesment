import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '@/theme';

import { ZonText } from '../index';

interface TextInputComponentProps extends TextInputProps {
  error?: boolean;
  errorLabel?: string;
  titleLabel?: string;
  InputStyle?: TextInputProps['style'];
  variant?: 'normal' | 'description';
  rightIcon?: React.ReactDOM | any;
  rightIconPress?: Function;
  maxHeight?: number; // New prop to control maximum height
  noLabel?: boolean;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  style,
  error,
  editable = true,
  errorLabel,
  titleLabel,
  InputStyle,
  variant = 'normal',
  rightIcon,
  rightIconPress,
  maxHeight = 200, // Default maxHeight for "description" type
  noLabel,
  ...props
}) => {
  const { components, borders, colors, gutters, fonts, layout } = useTheme();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(40);

  const handleContentSizeChange = (event: any) => {
    const contentHeight = event.nativeEvent.contentSize.height;

    setHeight(Math.min(maxHeight, Math.max(100, contentHeight))); // Use maxHeight prop
  };

  return (
    <View style={style}>
      {!noLabel ? (
        <ZonText
          variant="listHeader"
          color={!editable ? 'gray500' : 'black'}
          style={[gutters.marginBottom_8]}
        >
          {titleLabel}
        </ZonText>
      ) : null}
      <TextInput
        style={[
          components.input,
          isFocused ? borders.danger300 : borders.gray200,
          error && borders.red500,
          InputStyle,
          !editable ? fonts.gray400 : fonts.black,
          {
            height: variant === 'description' ? height : undefined,
            maxHeight: variant === 'description' ? maxHeight : undefined, // Apply maxHeight
            paddingRight: rightIcon ? 48 : 16,
          },
        ]}
        editable={editable}
        placeholderTextColor={colors.gray500}
        onFocus={() => {
          setIsFocused(true);
        }}
        cursorColor={colors.danger500}
        onBlur={() => setIsFocused(false)}
        onContentSizeChange={
          variant === 'description' ? handleContentSizeChange : undefined
        }
        multiline={variant === 'description'}
        {...props}
      />
      {rightIcon && (
        <TouchableOpacity
          style={[
            layout.absolute,
            gutters.padding_4,
            {
              top: error ? '37%' : '51%',
              right: '3%',
              alignSelf: 'flex-end',
            },
          ]}
          onPress={() => {
            rightIconPress ? rightIconPress() : null;
          }}
        >
          {rightIcon}
        </TouchableOpacity>
      )}

      {error && (
        <ZonText
          variant="sub"
          color="red500"
          style={[gutters.marginVertical_8]}
        >
          {errorLabel}
        </ZonText>
      )}
    </View>
  );
};

export default TextInputComponent;
