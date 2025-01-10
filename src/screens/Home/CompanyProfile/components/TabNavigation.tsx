import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import AboutCompanyProfile from './TabNavigation/About';
import ServiceDetail from './TabNavigation/ServiceDetails';
import { ZonText } from '@/components/atoms';


export function TabNavigation() {
    const [activeTab, setActiveTab] = useState('Services');

    const renderContent = () => {
        switch (activeTab) {
            case 'Services':
                return <ServiceDetail />;
            case 'About':
                return <AboutCompanyProfile />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.tab,
                        activeTab === 'Services' && styles.activeTab,
                        pressed && styles.pressedTab
                    ]}
                    onPress={() => setActiveTab('Services')}
                >
                    {({ pressed }) => (
                        <ZonText
                            variant="listHeader"
                            style={[
                                styles.tabText,
                                activeTab === 'Services' && styles.activeTabText,
                                pressed && styles.pressedTabText
                            ]}
                        >
                            Services
                        </ZonText>
                    )}
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.tab,
                        activeTab === 'About' && styles.activeTab,
                        pressed && styles.pressedTab
                    ]}
                    onPress={() => setActiveTab('About')}
                >
                    {({ pressed }) => (
                        <ZonText
                            variant="listHeader"
                            style={[
                                styles.tabText,
                                activeTab === 'About' && styles.activeTabText,
                                pressed && styles.pressedTabText
                            ]}
                        >
                            About
                        </ZonText>
                    )}
                </Pressable>
            </View>
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    tabContainer: {
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        flexDirection: 'row',
        gap: 12,
    },
    tab: {
        flex: 1,
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeTab: {
        backgroundColor: '#E86A33',
        paddingBottom: 10,
    },
    pressedTab: {
        opacity: 0.8,
    },
    tabText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
    },
    activeTabText: {
        color: '#fff',
    },
    pressedTabText: {
        fontSize: 15,
    },
});