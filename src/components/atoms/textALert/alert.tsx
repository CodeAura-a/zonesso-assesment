import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ZonText } from '../index';

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
  const { label, showAlert, style } = props;

  return (
    <>
      {showAlert ? (
        <View style={{ ...styles.container, ...style }}>
          <ZonText variant="sub" color="danger500">
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
    marginLeft: 16,
  },
});
