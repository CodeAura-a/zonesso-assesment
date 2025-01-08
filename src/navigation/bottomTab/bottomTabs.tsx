// BottomTabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { useTheme } from '@/theme';
import { IMAGES } from '@/theme/assets/images';

import { Activity, Chat, Home, Post, User } from '@/screens';

import { TabIcon } from './tab-icon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        headerTitle: '',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 80,
        },
      })}
    >
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name="Home" focused={focused} source={IMAGES.HOME} />
          ),

          tabBarLabel: 'Home',
        })}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name="Activity" focused={focused} source={IMAGES.BELL} />
          ),

          tabBarLabel: 'Activity',
        })}
        name="Activity"
        component={Activity}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name="Post" focused={focused} source={IMAGES.POST} />
          ),

          tabBarLabel: 'Post',
        })}
        name="Post"
        component={Post}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name="Chat" focused={focused} source={IMAGES.MESSAGE} />
          ),

          tabBarLabel: 'Chat',
        })}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name="User" focused={focused} source={IMAGES.USER} />
          ),

          tabBarLabel: 'User',
        })}
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
