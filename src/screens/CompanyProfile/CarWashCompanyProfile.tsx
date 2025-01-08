import { View, StyleSheet, ScrollView } from 'react-native'
import { Header } from './components/Header'
import { BusinessCard } from './components/BusinessCard'
import { TabNavigation } from './components/TabNavigation'
import { ZonImage } from '@/components/atoms'

export default function CarWashCompanyProfile() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <ZonImage
                    source={require('@/theme/assets/images/ToyotaCard.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.content}>
                    <BusinessCard props={businessCardData} />
                    <TabNavigation />
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
    },
})


const businessCardData = {
    logo: "",
    title: "Perfect Spot Auto Spa",
    kilometersAway: "1.2 km away",
    address: "Deira, Dubai, United Arab Emirates",
    timing: "Timings: 9:00 am - 9:00 pm"
}