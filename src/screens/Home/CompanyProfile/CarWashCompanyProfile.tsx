import { ScrollView, StyleSheet, View } from 'react-native';

import { ZonImage } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { BusinessCard } from './components/BusinessCard';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';

export default function CarWashCompanyProfile() {
  return (
    <SafeScreen backButton={false} noHeader>
      <ScrollView>
        <Header />
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
    </SafeScreen>
  );
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
});

const businessCardData = {
  logo: '',
  title: 'Perfect Spot Auto Spa',
  kilometersAway: '1.2 km away',
  address: 'Deira, Dubai, United Arab Emirates',
  timing: 'Timings: 9:00 am - 9:00 pm',
};
