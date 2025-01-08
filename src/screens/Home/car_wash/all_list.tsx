import { useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Linking, Pressable, View } from 'react-native';

import { useTheme } from '@/theme';
import layout from '@/theme/layout';

import {
  ZonButton,
  ZonImage,
  ZonText,
} from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { height } from '@/utils/common';

import { Detail_List } from './data';
import useStyles from './styles';
import { LikeButton } from '@/components/atoms/Like/like';
import { ShareButton } from '@/components/atoms/Share/share';
import { Paths } from '@/navigation/paths';

export default function AllList({ navigation }: any) {
  const styles = useStyles();
  const route: any = useRoute().params;
  const { gutters, backgrounds, borders } = useTheme();

  const handleCompanyProfile = () => {
    navigation.navigate(Paths.CompanyProfile)
  }
  const header = () => {
    return (
      <View style={[layout.row]}>
        <ZonText variant="h1" style={styles.headerText}>
          Showing results in
        </ZonText>
        <ZonText variant="h1" color="danger500">
          {' '}
          200
        </ZonText>
        <ZonText variant="h1">{route?.title}</ZonText>
      </View>
    );
  };

  const renderItem = (item: any) => {
    return (
      <View
        style={[
          gutters.paddingHorizontal_16,
          backgrounds.white,
          gutters.marginTop_12,
          borders.rounded_8,
        ]}
      >
        <View style={{ position: 'relative' }}>
          <Pressable onPress={handleCompanyProfile}>
            <ZonImage
              source={{ uri: item?.image }}
              style={{ height: height / 4, width: '100%', borderRadius: 8 }}
              resizeMode="cover"
            />
          </Pressable>
          <View
            style={[
              layout.row,
              layout.justifyEnd,
              {
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 100,
              },
            ]}
          >
            <View style={[layout.row, gutters.gap_6]}>
              <LikeButton />
              <ShareButton />
            </View>
          </View>
        </View>
        <Pressable onPress={handleCompanyProfile}>
          <View style={[layout.row, layout.justifyBetween, gutters.marginTop_8]}>
            <ZonText variant="black2">AED 150</ZonText>
            <ZonText variant="sub" color="gray600">
              {item?.distance} away
            </ZonText>
          </View>

          <View>
            <ZonText style={styles.cardTitle}>{item?.title}</ZonText>
            <ZonText variant="sub" color="gray600" style={[gutters.marginTop_6]}>
              {item?.description}
            </ZonText>

            <View style={[layout.row, gutters.marginTop_14]}>
              <ZonImage
                source={{ uri: item?.companyImage }}
                style={[
                  { height: 48, width: 48 },
                  gutters.marginRight_12,
                  borders.rounded_4,
                ]}
                resizeMode="cover"
              />
              <View>
                <View style={[layout.row]}>
                  <ZonText variant="sub" fontFamily="bold" color="gray600">
                    Location:{' '}
                  </ZonText>
                  <ZonText variant="sub" fontFamily="medium" color="gray600">
                    {item?.location}
                  </ZonText>
                </View>

                <View style={[layout.row]}>
                  <ZonText variant="sub" fontFamily="bold" color="gray600">
                    Posted on:
                  </ZonText>
                  <ZonText variant="sub" fontFamily="medium" color="gray600">
                    {item?.postedDate}
                  </ZonText>
                </View>

                <View style={[layout.row]}>
                  <ZonText variant="sub" fontFamily="bold" color="gray600">
                    Posted by:{' '}
                  </ZonText>
                  <ZonText variant="sub" fontFamily="medium" color="gray600">
                    {item?.postedBy}
                  </ZonText>
                </View>
              </View>
            </View>

            <View
              style={[layout.row, layout.justifyBetween, gutters.marginTop_16, layout.gap10]}
            >
              <ZonButton
                onPress={() => {
                  console.log(';LearnMoreLinks;klk;k;');
                }}
                style={{ width: '100%' }}
                variant="outlined"
                label="Chat"
              />
              <ZonButton
                onPress={() => {
                  Linking.openURL(`tel:${item?.phone}`);
                }}
                style={{ width: '100%' }}
                label="Call"
              />
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeScreen>
      <FlashList
        ListHeaderComponent={header}
        data={Detail_List}
        renderItem={({ item }) => renderItem(item)}
        ItemSeparatorComponent={() => (
          <View
            style={[
              { height: 8 },
              backgrounds.gray200,
              gutters.marginVertical_10,
            ]}
          />
        )}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={600}
      />
    </SafeScreen>
  );
}

