import { StyleSheet, View } from 'react-native';

import { ZonImage, ZonText } from '@/components/atoms';

import { ActionButtons } from './ActionButton';

interface BusinessCardProps {
  props: {
    logo: string;
    title: string;
    kilometersAway: string;
    address: string;
    timing: string;
  };
}
export function BusinessCard({ props }: BusinessCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <ZonImage
          source={require('@/theme/assets/images/ToyotaCard.png')}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.details}>
          <ZonText variant="sub" style={styles.title}>
            {props.title}
          </ZonText>
          <View style={styles.infoRow}>
            <ZonText variant="sub" style={styles.infoText}>
              {props.kilometersAway}
            </ZonText>
          </View>
          <View style={styles.infoRow}>
            <ZonText variant="sub" style={styles.infoText}>
              {props.address}
            </ZonText>
          </View>
          <View style={styles.infoRow}>
            <ZonText variant="sub" style={styles.infoText}>
              {props.timing}
            </ZonText>
          </View>
        </View>
      </View>
      <ActionButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    marginTop: -50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 4,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    color: '#666',
    fontSize: 14,
  },
});
