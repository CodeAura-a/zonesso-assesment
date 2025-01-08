// LinearGradientComponent.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface LinearGradientComponentProps {
  children: React.ReactNode;
  colors?: string[];
}

const LinearGradientComponent: React.FC<LinearGradientComponentProps> = ({
  children,
  colors,
}) => {
  return (
    <LinearGradient
      colors={['#F06100', '#F03000', '#F00030', '#F04900', '#F0060D']}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default LinearGradientComponent;
