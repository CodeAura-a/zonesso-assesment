import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { useTheme } from '@/theme';

import { ZonText } from '..';

type props = {
  label: string;
  iconName?: string;
  iconType?: any;
  showAlert?: boolean;
  iconStyle?: any;
  variant: 'success' | 'error';
  style?: StyleProp<ViewStyle>;
};
export default function ZonTextAlert(props: props) {
  const { label, iconName, showAlert, iconStyle, variant, style } = props;
  const { colors, gutters, layout, borders } = useTheme();
  return (
    <>
      {showAlert ? (
        <View style={{ ...styles.container, ...style }}>
          <ZonText variant="sub" color="danger300">
            {label}
          </ZonText>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 4,
  },
});
