import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { Pressable, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import { IconByVariant, ZonSvg, ZonText } from '@/components/atoms';
import { DefaultError } from '@/components/molecules';
import { ErrorBoundary } from '@/components/organisms';

import { width } from '@/utils/common';

type Props = PropsWithChildren<
  {
    isError?: boolean;
    onResetError?: () => void;
    backButton?: boolean;
    noHeader?: boolean;
    containerStyle?: object;
    search?: boolean;
    heart?: boolean;
    filter?: boolean;
    location?: boolean;
    heading?: boolean;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

function SafeScreen({
  children = undefined,
  isError = false,
  onResetError = undefined,
  backButton = true,
  style,
  noHeader = false,
  containerStyle,
  search,
  heart,
  filter,
  location,
  heading,
  ...props
}: Props) {
  const navigation = useNavigation();
  const { layout, navigationTheme, variant, gutters, backgrounds, fonts } =
    useTheme();

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
          <>
            {noHeader ? null : (
              <View style={[{ height: 28, width: '95%' }, layout.row]}>
                <View style={[layout.row, { width: '60%' }]}>
                  {backButton ? (
                    <Pressable
                      onPress={() => {
                        navigation.goBack();
                      }}
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1 },
                        gutters.padding_2,
                        gutters.marginLeft_16,
                      ]}
                    >
                      <ZonSvg
                        name="leftArrow"
                        viewStyle={{ width: 18, height: 18 }}
                      />
                    </Pressable>
                  ) : null}
                  {heading ? (
                    <ZonText
                      variant="black"
                      style={[fonts.size_16, gutters.marginLeft_10]}
                      fontFamily="bold"
                    >
                      {heading}
                    </ZonText>
                  ) : null}
                  {location ? (
                    <Pressable
                      onPress={() => {
                        navigation.goBack();
                      }}
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1 },
                        gutters.padding_2,
                        gutters.marginLeft_16,

                        layout.row,
                      ]}
                    >
                      <ZonSvg
                        name="red_location"
                        viewStyle={{ marginTop: -2 }}
                      />
                      <ZonText
                        variant="black"
                        style={[fonts.size_16, gutters.marginLeft_4]}
                        fontFamily="bold"
                      >
                        Dubai
                      </ZonText>
                      <ZonSvg name="arrow_down" viewStyle={{}} />
                    </Pressable>
                  ) : null}
                </View>
                <View
                  style={[
                    layout.row,
                    {
                      flex: 1,
                      justifyContent: 'flex-end',
                    },
                  ]}
                >
                  {search ? (
                    <Pressable
                      onPress={() => {
                        navigation.goBack();
                      }}
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1 },
                        gutters.padding_2,
                        gutters.marginLeft_8,
                      ]}
                    >
                      <ZonSvg name="search" />
                    </Pressable>
                  ) : null}
                  {filter ? (
                    <Pressable
                      onPress={() => {
                        navigation.goBack();
                      }}
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1 },
                        gutters.padding_2,
                        gutters.marginLeft_8,
                      ]}
                    >
                      <ZonSvg name="Filter" />
                    </Pressable>
                  ) : null}

                  {heart ? (
                    <Pressable
                      onPress={() => {
                        navigation.goBack();
                      }}
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1 },
                        gutters.padding_2,
                        gutters.marginLeft_8,
                      ]}
                    >
                      <ZonSvg name="gray_heart" />
                    </Pressable>
                  ) : null}
                </View>
              </View>
            )}

            <View style={[layout.flex_1, containerStyle]}>{children}</View>
          </>
        )}
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default SafeScreen;
