import { useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { View } from 'react-native';

import { useTheme } from '@/theme';
import layout from '@/theme/layout';

import { ZonImage, ZonSvg, ZonText } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { height } from '@/utils/common';

import { Detail_List } from './data';
import useStyles from './styles';

export default function AllList() {
  const styles = useStyles();
  const route = useRoute().params;
  const { gutters, backgrounds, borders } = useTheme();

  const header = () => {
    return (
      <View style={[layout.row]}>
        <ZonText style={styles.headerText}>
          Showing results in {route?.title}
        </ZonText>
        {/* <GradientText
          style={styles.headerText}
          colors={['#F06100', '#F03000', '#F00030', '#F04900', '#F0060D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          200
        </GradientText> */}
      </View>
    );
  };
  const renderItem = (item) => {
    console.log('----------------', item?.companyImage);
    return (
      <View
        style={[
          gutters.paddingHorizontal_16,
          backgrounds.white,
          gutters.marginTop_12,
          borders.rounded_8,
        ]}
      >
        <ZonImage
          source={{ uri: item?.image }}
          style={{ height: height / 4, width: '100%', borderRadius: 8 }}
          resizeMode="cover"
        />
        <View
          style={[
            layout.row,
            layout.justifyBetween,
            layout.absolute,
            { zIndex: 100 },
          ]}
        >
          <View></View>
          <View
            style={[
              layout.row,
              gutters.gap_6,
              // layout.absolute,
              { zIndex: 100, right: 0 },
            ]}
          >
            <ZonSvg
              name="heart"
              size={24}
              viewStyle={{
                marginTop: -12,
                backgroundColor: 'red',
                zIndex: 100,
              }}
            />
            <ZonSvg
              name="share"
              size={24}
              viewStyle={{
                marginTop: -12,
                backgroundColor: 'red',
                zIndex: 100,
              }}
            />
          </View>
        </View>
        <View style={[layout.row, layout.justifyBetween, gutters.marginTop_8]}>
          <ZonText variant="black2">AED 150</ZonText>
          <ZonText variant="sub" color="gray600">
            {item?.distance} away
          </ZonText>
        </View>

        <View style={[]}>
          {/* <View style={styles.premiumContainer}>
            <Text style={styles.premiumText}>Premium</Text>
            <Text style={styles.priceText}>{item?.price}</Text>
            <Text style={styles.distanceText}>{item?.distance}</Text>
          </View> */}

          <ZonText style={styles.cardTitle}>{item?.title}</ZonText>
          <ZonText variant="sub" color="gray600">
            {item?.description}
          </ZonText>

          <View style={[layout.row]}>
            <ZonImage
              source={{ uri: item?.companyImage }}
              style={{ height: 50, width: 50 }}
              // resizeMode="contain"
            />
            <View>
              <View style={[layout.row]}>
                <ZonText variant="sub" fontFamily="bold">
                  Location:{' '}
                </ZonText>
                <ZonText variant="sub" fontFamily="medium">
                  {item?.location}
                </ZonText>
              </View>

              <View style={[layout.row]}>
                <ZonText variant="sub" fontFamily="bold">
                  Posted on:
                </ZonText>
                <ZonText variant="sub" fontFamily="medium">
                  {item?.postedDate}
                </ZonText>
              </View>

              <View style={[layout.row]}>
                <ZonText variant="sub" fontFamily="bold">
                  Posted by:{' '}
                </ZonText>
                <ZonText variant="sub" fontFamily="medium">
                  {item?.postedBy}
                </ZonText>
              </View>
            </View>
          </View>
        </View>

        <View style={[layout.row, layout.justifyBetween]}>
          <ZonText style={styles.cardLocation}>{item?.location}</ZonText>
          <View style={[layout.row, gutters.gap_6]}>
            <ZonSvg name="chat" size={24} /> <ZonSvg name="call" size={24} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeScreen>
      <FlashList
        ListHeaderComponent={header}
        data={Detail_List}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={() => 'banner'}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={100}
      />
    </SafeScreen>
  );
}
