import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';

import { useTheme } from '@/theme';

import { ZonSvg } from '../index';

// import { ZonSvg } from '@/components/atoms';

interface GenericModalProps extends Partial<ModalProps> {
  isVisible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  backdropStyle?: StyleProp<ViewStyle>;
  variant?: 'default' | 'bottom';
  animationIn?: ModalProps['animationIn'];
  animationOut?: ModalProps['animationOut'];
  useNativeDriver?: boolean;
  toastRef?: any;
  topBarClose?: () => void;
  closeStyle?: StyleProp<ViewStyle>;
}

const ModalVariant: React.FC<GenericModalProps> = ({
  isVisible,
  onClose,
  topBarClose,
  children,
  containerStyle,
  backdropStyle,
  variant = 'default',
  animationIn,
  animationOut,
  useNativeDriver = true,
  toastRef,
  closeStyle,
  ...modalProps
}) => {
  const defaultAnimationIn = variant === 'bottom' ? 'slideInUp' : 'zoomIn';
  const defaultAnimationOut = variant === 'bottom' ? 'slideOutDown' : 'zoomOut';

  const { backgrounds, layout, gutters } = useTheme();
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn={animationIn || defaultAnimationIn}
      animationOut={animationOut || defaultAnimationOut}
      useNativeDriver={useNativeDriver}
      backdropTransitionOutTiming={0}
      swipeDirection={variant === 'bottom' ? ['down'] : undefined}
      onSwipeComplete={onClose}
      // avoidKeyboard={false}

      style={[
        variant === 'bottom' ? styles.bottomModal : styles.defaultModal,
        backdropStyle,
      ]}
      {...modalProps}
    >
      <View
        style={[
          styles.container,
          variant === 'bottom' ? styles.bottomContainer : null,
          containerStyle,
        ]}
      >
        {variant === 'bottom' && (
          <Pressable
            onPress={topBarClose}
            style={[
              layout.row,
              gutters.marginBottom_24,
              gutters.paddingLeft_8,
              gutters.paddingBottom_8,
              gutters.paddingTop_8,
              { marginTop: -10, width: '100%' },
            ]}
          >
            <View
              style={[
                layout.itemsCenter,
                layout.justifyCenter,
                layout.row,
                {
                  flex: 1,
                },
              ]}
            >
              <View
                style={[
                  backgrounds.gray100,
                  {
                    height: 6,
                    width: '20%',
                    borderRadius: 3,
                  },
                ]}
              />
              <Pressable
                style={({ pressed }) => [
                  layout.absolute,
                  { right: 0, top: 0, alignSelf: 'center' },
                  { opacity: pressed ? 0.5 : 1.0 },
                  closeStyle,
                ]}
                onPress={onClose}
              >
                <ZonSvg name="close" />
              </Pressable>
            </View>
          </Pressable>
        )}
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  defaultModal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    // position: 'absolute',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 20,
    // paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomContainer: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 0,
  },
});

export default ModalVariant;
