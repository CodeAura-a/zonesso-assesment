import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import { Paths } from '@/navigation/paths';

import { AllList, CarWash, Startup, CarWashCompanyProfile } from '@/screens';

import BottomTabNavigator from './bottomTab/bottomTabs';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          key={variant}
          screenOptions={{ headerShown: false }}
          initialRouteName={Paths.Startup}>
          <Stack.Screen component={BottomTabNavigator} name={Paths.bottomTab} />
          <Stack.Screen component={Startup} name={Paths.Startup} />
          <Stack.Screen component={CarWash} name={Paths.CarWash} />
          <Stack.Screen component={AllList} name={Paths.AllList} />
          <Stack.Screen component={CarWashCompanyProfile} name={Paths.CompanyProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
