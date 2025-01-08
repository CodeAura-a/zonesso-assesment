import { ZonButton } from '@/components/atoms'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';

export function Header() {
    const navigation = useNavigation();
    const { gutters } = useTheme();
    return (
        <View style={styles.header}>
            <ZonButton
                onPress={() => navigation.goBack()}
                style={[gutters.padding_2, gutters.marginLeft_16, styles.backButton]}
                variant="ghost"
                icon='leftArrow'
                iconStyle={{ width: 18, height: 18 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 16,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

