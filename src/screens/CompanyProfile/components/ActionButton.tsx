import { ZonButton } from '@/components/atoms'
import { View, StyleSheet, Linking } from 'react-native'

export function ActionButtons() {
    return (
        <View style={styles.container}>
            <ZonButton
                onPress={() => {
                    console.log(';LearnMoreLinks;klk;k;');
                }}
                style={{ width: '100%' }}
                variant="outlined"
                label="Chat"
                icon='message'
                iconStyle={{ marginRight: 5 }}
            />
            <ZonButton
                onPress={() => {
                    Linking.openURL(`tel:+971542983088`);
                }}
                style={{ width: '100%' }}
                label="Call"
                icon='phoneCall'
                iconStyle={{ marginRight: 5, height: 20 }}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        paddingVertical: 10,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        gap: 8,
    },
    chatButton: {
        backgroundColor: '#FFF1F0',
    },
    callButton: {
        backgroundColor: '#E86A33',
    },
    chatText: {
        color: '#E86A33',
        fontWeight: '600',
    },
    callText: {
        color: '#fff',
        fontWeight: '600',
    },
})

