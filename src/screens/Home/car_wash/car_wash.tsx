import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { Paths } from '@/navigation/paths';
import { RootStackParamList } from '@/navigation/types';

import { SliderList } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { LIST_DATA } from '@/utils/data';

const sliderData = [
  { title: 'Dubai', data: LIST_DATA },
  { title: 'Abu Dhabi', data: LIST_DATA },
  { title: 'Sharjah', data: LIST_DATA },
  { title: 'Al Ain', data: LIST_DATA },
  { title: 'Ajman', data: LIST_DATA },
  { title: 'Umm Al Quwain', data: LIST_DATA },
  { title: 'Ras Al Khaimah', data: LIST_DATA },
  { title: 'Fujairah', data: LIST_DATA },
];

export default function CarWash() {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeScreen>
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
