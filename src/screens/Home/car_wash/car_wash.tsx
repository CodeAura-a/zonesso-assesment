import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { Paths } from '@/navigation/paths';
import { RootStackParamList } from '@/navigation/types';

import { SliderList } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import {
  ABU_DHABI_LIST_DATA,
  LIST_DATA,
  SHARJAH_LIST_DATA,
} from '@/utils/data';

const sliderData = [
  { title: 'Dubai', data: LIST_DATA },
  { title: 'Abu Dhabi', data: ABU_DHABI_LIST_DATA },
  { title: 'Sharjah', data: SHARJAH_LIST_DATA },
  { title: 'Al Ain', data: LIST_DATA },
  { title: 'Ajman', data: LIST_DATA },
  { title: 'Umm Al Quwain', data: LIST_DATA },
  { title: 'Ras Al Khaimah', data: LIST_DATA },
  { title: 'Fujairah', data: LIST_DATA },
];

export default function CarWash() {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeScreen heading="Car wash and details" search filter>
      <FlashList
        data={[1]}
        renderItem={() => (
          <>
            {/* Loop through the sliderData array to display each SliderList */}
            {sliderData.map((slider, index) => (
              <SliderList
                key={index}
                data={slider.data}
                title={slider.title}
                imagePress={() =>
                  navigation.navigate(Paths.AllList, {
                    title: slider.title,
                  })
                }
                viewAll={() =>
                  navigation.navigate(Paths.AllList, {
                    title: slider.title,
                  })
                }
              />
            ))}
          </>
        )}
        keyExtractor={() => 'banner'}
        showsVerticalScrollIndicator={false}
      />
    </SafeScreen>
  );
}
