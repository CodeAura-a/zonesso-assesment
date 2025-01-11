import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Linking, Pressable } from 'react-native';

import { IMAGES } from '@/theme/assets/images';
import { Paths } from '@/navigation/paths';

import { SliderList } from '@/components/atoms';
import ImageVariant from '@/components/atoms/image/image-variant';
import { SafeScreen } from '@/components/templates';

import { LIST_DATA } from '@/utils/data';

import CategoryGridComponent from './components/CategoryGridComponent';

const sliderData = [
  { title: 'Top Showrooms', data: LIST_DATA },
  { title: 'Promotions', data: LIST_DATA },
  { title: 'New Arrivals', data: LIST_DATA },
  // You can add more sliders with different titles and data here
];

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeScreen location backButton={false} search>
      <FlashList
        data={[1]}
        renderItem={() => (
          <>
            <CategoryGridComponent />
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.6 : 1,
              })}
              onPress={() => {
                Linking.openURL('https://motors.zonesso.com');
              }}
            >
              <ImageVariant
                source={IMAGES.BANNER}
                style={{ height: 140, marginTop: 20 }}
              />
            </Pressable>

            {/* Loop through the sliderData array to display each SliderList */}
            {sliderData.map((slider, index) => (
              <SliderList
                key={index}
                data={slider.data}
                title={slider.title}
                viewAll={() => navigation.navigate(Paths.CarWash as never)}
                imagePress={() =>
                  navigation.navigate(Paths.CompanyProfile as never)
                }
                LogoPress={() =>
                  navigation.navigate(Paths.CompanyProfile as never)
                }
              />
            ))}
          </>
        )}
        estimatedItemSize={300}
        keyExtractor={() => 'banner'}
        showsVerticalScrollIndicator={false}
      />
    </SafeScreen>
  );
}
