import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/theme';
import { CARD_IMAGES, IMAGES } from '@/theme/assets/images';
import layout from '@/theme/layout';
import { Paths } from '@/navigation/paths';

import {
  ZonButton,
  ZonImage,
  ZonModal,
  ZonSvg,
  ZonText,
} from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { width } from '@/utils/common';

export default function Payment() {
  const { gutters, borders, fonts, backgrounds } = useTheme();
  const route = useRoute()?.params;
  const [isVisible, setVisible] = useState(false);
  console.log('route-----------------------', JSON.stringify(route, null, 2));
  return (
    <SafeScreen containerStyle={[gutters.paddingHorizontal_16]}>
      <ZonText
        variant="button"
        fontFamily="bold"
        style={[gutters.marginTop_20]}
      >
        Location Details
      </ZonText>
      <View
        style={[
          borders.w_1,
          borders.gray300,
          borders.rounded_8,
          gutters.padding_8,
          layout.row,
          layout.itemsCenter,
          gutters.marginTop_10,
          gutters.marginBottom_4,
        ]}
      >
        <ZonImage
          source={IMAGES.GRAY_LOCATION}
          style={[gutters.marginRight_12, { height: 24, width: 24 }]}
        />
        <ZonText variant="sub" style={[fonts.lineHeight_34]}>
          {route?.location}
        </ZonText>
      </View>

      <View
        style={[
          { height: 8, width: width, marginLeft: -18 },
          backgrounds.gray200,
          gutters.marginVertical_10,
        ]}
      />

      <ZonText variant="button" fontFamily="bold" style={[gutters.marginTop_6]}>
        Services added
      </ZonText>
      <View style={[layout.row, layout.itemsCenter]}>
        <ZonImage
          source={{ uri: route?.image }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 12,
            marginTop: 12,
            marginRight: 18,
          }}
          resizeMode="cover"
        />
        <View>
          <ZonText variant="button" fontFamily="bold">
            {route?.title}
          </ZonText>
          <ZonText
            variant="button"
            fontFamily="medium"
            color="gray500"
            style={[gutters.marginTop_4]}
          >
            Classic Clean AED 150
          </ZonText>
        </View>
      </View>

      <View
        style={[
          { height: 8, width: width, marginLeft: -18 },
          backgrounds.gray200,
          gutters.marginVertical_12,
        ]}
      />

      <ZonText variant="button" fontFamily="bold" style={[gutters.marginTop_6]}>
        Vehicle Details
      </ZonText>
      <View
        style={[
          borders.w_1,
          borders.gray300,
          borders.rounded_8,
          gutters.padding_8,
          gutters.paddingHorizontal_20,
          gutters.marginTop_10,
          gutters.marginBottom_4,
        ]}
      >
        <ZonText variant="button" fontFamily="bold">
          {route?.vehical?.name}
        </ZonText>
        <ZonText variant="small" color="gray500">
          {route?.vehical?.numberPlate}
        </ZonText>
      </View>
      <View
        style={[
          { height: 8, width: width, marginLeft: -18 },
          backgrounds.gray200,
          gutters.marginVertical_12,
        ]}
      />

      <ZonText variant="button" fontFamily="bold" style={[gutters.marginTop_6]}>
        Time and Date
      </ZonText>
      <View
        style={[
          borders.w_1,
          borders.gray300,
          borders.rounded_8,
          gutters.padding_8,
          gutters.paddingHorizontal_20,
          gutters.marginTop_10,
          gutters.marginBottom_4,
        ]}
      >
        <ZonText variant="button" fontFamily="bold">
          {moment(route?.date).format('DD MMM YYYY-h:mm A')}
        </ZonText>
      </View>

      <View
        style={[
          { height: 8, width: width, marginLeft: -18 },
          backgrounds.gray200,
          gutters.marginVertical_12,
        ]}
      />

      <ZonText variant="button" fontFamily="bold">
        Payment Summary
      </ZonText>
      <View style={[layout.row, layout.justifyBetween]}>
        <ZonText
          variant="button"
          fontFamily="medium"
          color="gray500"
          style={[gutters.marginTop_8]}
        >
          Car Recovery
        </ZonText>
        <ZonText
          variant="button"
          fontFamily="medium"
          color="gray500"
          style={[gutters.marginTop_8]}
        >
          150 AED
        </ZonText>
      </View>
      <View style={[layout.row, layout.justifyBetween]}>
        <ZonText
          variant="button"
          fontFamily="medium"
          color="gray500"
          style={[gutters.marginTop_8]}
        >
          Vat (12%)
        </ZonText>
        <ZonText
          variant="button"
          fontFamily="medium"
          color="gray500"
          style={[gutters.marginTop_8]}
        >
          18 AED
        </ZonText>
      </View>
      <View style={[layout.row, layout.justifyBetween]}>
        <ZonText
          variant="button"
          fontFamily="medium"
          color="gray500"
          style={[gutters.marginTop_8]}
        >
          Delivery charges
        </ZonText>
        <ZonText
          variant="button"
          fontFamily="medium"
          color="gray500"
          style={[gutters.marginTop_8]}
        >
          0 AED
        </ZonText>
      </View>
      <View style={[layout.row, layout.justifyBetween, gutters.marginTop_8]}>
        <ZonText variant="button" fontFamily="bold">
          Payment Summary
        </ZonText>
        <ZonText
          variant="button"
          fontFamily="bold"
          style={[gutters.marginTop_8]}
        >
          168 AED
        </ZonText>
      </View>

      <ZonButton
        onPress={() => {
          setVisible(true);
        }}
        label="Confirm"
      />

      <SuccessModal setVisible={setVisible} isVisible={isVisible} />
    </SafeScreen>
  );
}

const SuccessModal = ({ setVisible, isVisible }) => {
  const navigation = useNavigation();
  const { gutters } = useTheme();
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ZonModal
      isVisible={isVisible}
      onClose={onClose}
      containerStyle={[layout.itemsCenter]}
      onBackdropPress={() => {}}
    >
      <ZonImage source={IMAGES.SUCCESS} style={{ width: 160, height: 160 }} />
      <ZonText variant="listHeader" fontFamily="bold">
        Congratulations!
      </ZonText>
      <ZonText variant="listHeader" fontFamily="medium">
        your ad is now live
      </ZonText>
      <View style={{ height: 40 }} />
      <ZonButton
        style={[{ width: '100%' }, gutters.marginBottom_10]}
        onPress={() => {
          navigation.navigate(Paths.bottomTab as never), onClose();
        }}
        label="See Ad Post"
      />
    </ZonModal>
  );
};
