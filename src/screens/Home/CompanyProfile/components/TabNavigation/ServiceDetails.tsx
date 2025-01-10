import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';

import { useTheme } from '@/theme';
import layout from '@/theme/layout';
import { Paths } from '@/navigation/paths';

import { ZonImage, ZonText } from '@/components/atoms';
import { LikeButton } from '@/components/atoms/Like/like';
import { ShareButton } from '@/components/atoms/Share/share';
import { Detail_List } from '@/screens/Home/car_wash/data';
import useStyles from '@/screens/Home/car_wash/styles';

import { height, width } from '@/utils/common';

const ServiceDetail = () => {
  const navigation = useNavigation();
  const styles = useStyles();
  const { gutters, backgrounds, borders } = useTheme();

  const renderItem = (item: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(Paths.Form, item);
        }}
        style={({ pressed }) => [
          backgrounds.white,
          gutters.marginTop_12,
          borders.rounded_8,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <View style={{ position: 'relative' }}>
          <ZonImage
            source={{ uri: item?.image }}
            style={{ height: height / 4, width: '100%', borderRadius: 8 }}
            resizeMode="cover"
          />
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
              <ShareButton />
              <LikeButton />
            </View>
          </View>
        </View>
        <View style={[layout.row, layout.justifyBetween, gutters.marginTop_8]}>
          <ZonText style={styles.cardTitle}>{item?.title}</ZonText>
          <ZonText variant="black2" color="danger500">
            AED 150
          </ZonText>
        </View>
        <View>
          <ZonText variant="sub" color="gray600" style={[gutters.marginTop_6]}>
            {item?.description}
          </ZonText>
        </View>
      </Pressable>
    );
  };

  return (
    <FlashList
      data={Detail_List}
      renderItem={({ item }) => renderItem(item)} // Pass selected and toggleSelection into renderItem
      keyExtractor={(item) => item?.id}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={600}
      ItemSeparatorComponent={() => (
        <View
          style={[
            { height: 8, width: width, zIndex: 100 },
            backgrounds.gray200,
            gutters.marginVertical_10,
          ]}
        />
      )}
    />
  );
};

export default ServiceDetail;
