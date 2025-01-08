import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Pressable, View } from 'react-native';

import { useTheme } from '@/theme';

import { ZonText } from '@/components/atoms';

import ImageVariant from '../image/image-variant';
import useStyles from './useStyles';

interface Item {
  id: string;
  title: string;
  image: string;
  distance: string;
  logo?: string;
}

interface CommonComponentProps {
  title: string;
  data: Item[];
  viewAll: () => void;
}

const SliderList: React.FC<CommonComponentProps> = ({
  title,
  data,
  viewAll,
}) => {
  const styles = useStyles();
  const { layout, gutters } = useTheme();

  const renderItem = ({ item }: { item: Item }) => {
    {
      console.log('--------------', item.image);
    }
    return (
      <View style={styles.card}>
        <ImageVariant source={item.image} style={styles.image} />
        <View style={[layout.row, layout.itemsCenter, gutters.marginTop_8]}>
          <ImageVariant
            source={item?.logo}
            style={{ width: 32, height: 32, borderRadius: 4 }}
          />
          <View style={styles.cardContent}>
            <ZonText variant="sub">{item?.title}</ZonText>
            <ZonText variant="sub2" style={styles.cardDistance} color="gray800">
              {item?.distance}
            </ZonText>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          layout.row,
          layout.justifyBetween,
          layout.itemsCenter,
          { width: '95%' },
        ]}
      >
        <ZonText variant="listHeader">{title}</ZonText>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          onPress={viewAll}
        >
          <ZonText variant="sub" color="red500">
            View all
          </ZonText>
        </Pressable>
      </View>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        estimatedItemSize={100} // Estimate the average height of an item
        horizontal
      />
    </View>
  );
};

export default SliderList;
