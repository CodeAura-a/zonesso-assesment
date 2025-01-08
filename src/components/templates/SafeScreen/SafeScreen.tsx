import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { Pressable, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import { IconByVariant, ZonSvg } from '@/components/atoms';
import { DefaultError } from '@/components/molecules';
import { ErrorBoundary } from '@/components/organisms';

type Props = PropsWithChildren<
  {
    isError?: boolean;
    onResetError?: () => void;
    backButton?: boolean;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

function SafeScreen({
  children = undefined,
  isError = false,
  onResetError = undefined,
  backButton = true,
  style,
  ...props
}: Props) {
  const navigation = useNavigation();
  const { layout, navigationTheme, variant, gutters, backgrounds } = useTheme();

  return (
    <SafeAreaView
      {...props}
      mode="padding"
      style={[layout.flex_1, backgrounds.white, style]}
    >
      <StatusBar
        backgroundColor={navigationTheme.colors.background}
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ErrorBoundary onReset={onResetError}>
        {isError ? (
          <DefaultError onReset={onResetError} />
        ) : (
          <View style={[layout.flex_1]}>
            <View style={[{ height: 24 }]}>
              {backButton ? (
                <Pressable
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={[gutters.padding_2, gutters.marginLeft_16]}
                >
                  <ZonSvg
                    name="leftArrow"
                    viewStyle={{ width: 18, height: 18 }}
                  />
                </Pressable>
              ) : null}
            </View>

            {children}
          </View>
        )}
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default SafeScreen;
