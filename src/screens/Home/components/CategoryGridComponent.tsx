import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import { useTheme } from '@/theme';
import * as svgs from '@/theme/assets/svgs';
import layout from '@/theme/layout';
import { Paths } from '@/navigation/paths';

import { ZonSvg } from '@/components/atoms'; // Check this import

import useStyles from '../styles'; // Ensure useStyles is correctly defined

interface Category {
  name: string;
  iconName: keyof typeof svgs;
  navigate?: string;
}

const categories: Category[] = [
  { name: 'Motors', iconName: 'cinemxticxlly', navigate: '' },
  { name: 'Motorbikes', iconName: 'motorBike', navigate: '' },
  { name: 'Showrooms', iconName: 'showrooms', navigate: '' },
  { name: 'Parts & Accessories', iconName: 'parts_accessories', navigate: '' },
  { name: 'Number Plate', iconName: 'numberplate', navigate: '' },
  { name: 'Car Services', iconName: 'carServices', navigate: '' },
  { name: 'Car Wash', iconName: 'carWash', navigate: Paths.CarWash },
  { name: 'Car Recovery', iconName: 'carRecovery', navigate: '' },
  { name: 'Boats', iconName: 'boats', navigate: '' },
];

export default function CategoryGridComponent() {
  const styles = useStyles();
  const navigation = useNavigation();
  const { borders, gutters } = useTheme();

  return (
    <View style={styles.gridContainer}>
      <FlashList
        data={categories}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.categoryCard,
              { opacity: pressed ? 0.6 : 1 },
            ]}
            onPress={() => {
              if (item.navigate) {
                navigation.navigate(item.navigate as never);
              } else {
                Alert.alert(
                  'Coming Soon',
                  'This feature is not available yet, but we are working on it. Please check back soon.',
                  [
                    {
                      text: 'OK',
                      onPress: () => {},
                    },
                  ],
                );
              }
            }}
          >
            <View
              style={[
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#DCDCDC',
                },
                borders.w_1,
                borders.rounded_10,

                layout.flex_1,
              ]}
            >
              {item.iconName ? (
                <ZonSvg name={item.iconName} size={85} />
              ) : (
                <View
                  style={{ width: 24, height: 24, backgroundColor: 'gray' }}
                />
              )}
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          </Pressable>
        )}
        estimatedItemSize={100}
        numColumns={3}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
