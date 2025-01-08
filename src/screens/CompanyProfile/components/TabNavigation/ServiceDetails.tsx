import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { useTheme } from '@/theme';
import layout from '@/theme/layout';
import {
    ZonImage,
    ZonText,
} from '@/components/atoms';
import { height } from '@/utils/common';
import { Detail_List } from '@/screens/Home/car_wash/data';
import useStyles from '@/screens/Home/car_wash/styles';
import { LikeButton } from '@/components/atoms/Like/like';
import { ShareButton } from '@/components/atoms/Share/share';
import { View } from 'react-native';


const ServiceDetail = () => {
    const styles = useStyles();
    const { gutters, backgrounds, borders } = useTheme();

    const renderItem = (item: any) => {
        return (
            <View
                style={[
                    backgrounds.white,
                    gutters.marginTop_12,
                    borders.rounded_8
                ]}>
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
                            <LikeButton />
                            <ShareButton />
                        </View>
                    </View>
                </View>
                <View style={[layout.row, layout.justifyBetween, gutters.marginTop_8]}>
                    <ZonText style={styles.cardTitle}>{item?.title}</ZonText>
                    <ZonText variant="black2" style={{ color: "#F06100CC" }}>AED 150</ZonText>
                </View>
                <View>
                    <ZonText variant="sub" color="gray600" style={[gutters.marginTop_6]}>
                        {item?.description}
                    </ZonText>
                </View>
            </View >
        );
    };

    return (
        <FlashList
            data={Detail_List}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item?.id}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={600}
        />
    )
}

export default ServiceDetail