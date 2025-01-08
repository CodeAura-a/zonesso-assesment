import React from 'react';
import { ActivityIndicator, Pressable, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from '@/theme';
import { fontsTitle } from '@/theme/types/fontStyles';

import * as svgs from '../../../theme/assets/svgs';
import { ZonSvg, ZonText } from '../index';
import useStyles from './styles';

type ButtonProps = {
  variant?: 'primary' | 'outlined' | 'ghost';
  icon?: keyof typeof svgs;
  iconStyle?: ViewStyle,
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle | any;
  label?: string;
  textVariant?: fontsTitle;
  fontFamily?: 'medium' | 'bold';
};

const GenericButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  fontFamily = 'medium',
  loading = false,
  disabled = false,
  onPress,
  label,
  style,
  textVariant = 'button',
  iconStyle
}) => {
  const styles = useStyles();
  const { colors, components, fonts, borders, backgrounds } = useTheme();

  const getButtonStyle = (pressed: boolean): (ViewStyle | undefined)[] => {
    const baseStyle = [components.button];
    let variantStyle: ViewStyle[] = [];

    switch (variant) {
      case 'outlined':
        variantStyle = [
          borders.w_1,
          pressed ? borders.gray100 : borders.danger500,
          pressed ? backgrounds.gray100 : backgrounds.danger100,
        ];
        break;
      case 'ghost':
        variantStyle = [
          pressed ? backgrounds.danger100 : {},
          { backgroundColor: "transparent" },
        ];
        break;
      default: // primary
        variantStyle = [components.primaryBackground];
    }

    const disabledStyle =
      variant === 'primary' ? [backgrounds.gray100] : [borders.gray100];

    return [
      { flex: 1 },
      ...baseStyle,
      ...(disabled ? disabledStyle : variantStyle),
      pressed && !disabled ? styles.pressed : undefined,
      style,
    ];
  };

  const getTextStyle = ({
    pressed,
  }: {
    pressed: boolean;
  }): ViewStyle | undefined => {
    if (disabled) {
      return fonts.gray50;
    }

    switch (variant) {
      case 'primary':
        return fonts.white;
      case 'ghost':
      case 'outlined':
        return pressed ? fonts.white : fonts.danger500;
    }
  };

  const renderContent = (pressed: boolean) => (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? colors.white : colors.danger100}
        />
      ) : (
        <>
            {icon && <ZonSvg name={icon} viewStyle={[styles.iconView, iconStyle]} />}
          <ZonText
            variant={textVariant}
            fontFamily={fontFamily}
            style={getTextStyle({ pressed })}
          >
            {label}
          </ZonText>
        </>
      )}
    </View>
  );

  return (
    <Pressable
      style={({ pressed }) => getButtonStyle(pressed)}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {({ pressed }) =>
        variant === 'primary' ? (
          <LinearGradient
            colors={
              disabled ? ['#ccc', '#ccc'] : ['#f37627', '#f25b26', '#f2276e']
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[components.button, { width: '100%' }, style]}
          >
            {renderContent(pressed)}
          </LinearGradient>
        ) : (
          renderContent(pressed)
        )
      }
    </Pressable>
  );
};

export default GenericButton;

