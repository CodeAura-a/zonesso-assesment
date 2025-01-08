import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useTheme } from '@/theme';
import * as svgs from '@/theme/assets/svgs';
import layout from '@/theme/layout';

import { ZonSvg } from '@/components/atoms'; // Check this import

import useStyles from '../styles'; // Ensure useStyles is correctly defined

interface Category {
  name: string;
  iconName: keyof typeof svgs;
}

const categories: Category[] = [
  { name: 'Motors', iconName: 'cinemxticxlly' },
  { name: 'Motorbikes', iconName: 'motorBike' },
  { name: 'Showrooms', iconName: 'showrooms' },
  { name: 'Parts & Accessories', iconName: 'parts_accessories' },
  { name: 'Number Plate', iconName: 'numberplate' },
  { name: 'Car Services', iconName: 'carServices' },
  { name: 'Car Wash', iconName: 'carWash' },
  { name: 'Car Recovery', iconName: 'carRecovery' },
  { name: 'Boats', iconName: 'boats' },
];

export default function CategoryGridComponent() {
  const styles = useStyles();
  const { borders, gutters } = useTheme();

  return (
    <View style={styles.gridContainer}>
      <FlashList
        data={categories}
        renderItem={({ item }) => (
          <Pressable style={[styles.categoryCard]} onPress={() => {}}>
            <View
              style={[
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                borders.w_1,
                borders.rounded_10,
                borders.gray500,
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
