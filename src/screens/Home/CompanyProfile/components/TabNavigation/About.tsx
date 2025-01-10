import React from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';

import { CARD_IMAGES } from '@/theme/assets/images';

import { ZonButton, ZonImage, ZonText } from '@/components/atoms';

export default function BusinessInfo() {
  return (
    <View style={styles.container}>
      {/* Opening Hours Section */}
      <View style={styles.card}>
        <ZonText variant="h1" style={styles.heading}>
          Opening Hours
        </ZonText>
        <View style={styles.timeContainer}>
          <ZonText variant="sub" style={styles.openText}>
            Open
          </ZonText>
          <ZonText variant="sub" style={styles.dotText}>
            •
          </ZonText>
          <ZonText variant="sub" style={styles.closeText}>
            Closes 9:00 pm
          </ZonText>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.card}>
        <ZonText variant="sub" style={styles.heading}>
          About
        </ZonText>
        <ZonText variant="sub" style={styles.description}>
          Perfect Spot Auto Spa are the Car Leather Seat and Car Leather
          Upholstery Seat specialists in Dubai For over 15 years serving the
          Major Car Dealers VW, Audi, Toyota, Lexus, Porsche, Mercedes, Rolls
          Royce, Nissan, Aston Martin, Tesla and Range Rover to repair, clean,
          redye and refurbish damaged car leather car seats in Dubai.
        </ZonText>
      </View>

      {/* Location Section */}
      <View style={styles.card}>
        <ZonText variant="sub" style={styles.heading}>
          Location
        </ZonText>
        <View style={styles.mapContainer}>
          <Pressable
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/place/Zonesso/@25.1189323,55.2039209,17z/data=!4m6!3m5!1s0xaaab02e5513d3ec7:0x4ca82a4ef9a6672c!8m2!3d25.1186798!4d55.2071932!16s%2Fg%2F11l27763z3?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D',
              )
            }
          >
            <ZonImage
              source={CARD_IMAGES.GOOGLE_MAP}
              style={styles.mapImage}
              resizeMode="cover"
            />
          </Pressable>
        </View>
      </View>

      {/* Navigate Button */}
      <ZonButton
        onPress={() =>
          Linking.openURL(
            'https://www.google.com/maps/place/Zonesso/@25.1189323,55.2039209,17z/data=!4m6!3m5!1s0xaaab02e5513d3ec7:0x4ca82a4ef9a6672c!8m2!3d25.1186798!4d55.2071932!16s%2Fg%2F11l27763z3?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D',
          )
        }
        style={{ width: '100%', height: 40 }}
        label="Navigate"
        iconStyle={{ marginRight: 5, height: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    gap: 16,
  },
  card: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  openText: {
    color: '#22c55e',
    fontWeight: '500',
    fontSize: 14,
  },
  dotText: {
    color: '#9ca3af',
    fontSize: 16,
  },
  closeText: {
    color: '#4b5563',
    fontSize: 15,
  },
  description: {
    color: '#4b5563',
    fontSize: 15,
    lineHeight: 24,
  },
  mapContainer: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  navigateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E86A33',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
