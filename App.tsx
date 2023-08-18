import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardOnePage from './pages/OnboardPages/OnboardOnePage';
import OnboardTwoPage from './pages/OnboardPages/OnboardTwoPage';
import OnboardThreePage from './pages/OnboardPages/OnboardThreePage';
import LoginPage from './pages/AuthPages/LoginPage';
import SignUpPage from './pages/AuthPages/SignUpPage';
import ProfilePage from './pages/DashboardPages/ProfilePage';
import DashboardPage from './pages/DashboardPages/DashboardPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="OnboardOne" component={OnboardOnePage} />
          <Stack.Screen name="OnboardTwo" component={OnboardTwoPage} />
          <Stack.Screen name="OnboardThree" component={OnboardThreePage} />
          <Stack.Screen options={{
          }} name="Sign" component={SignUpPage} />
          <Stack.Screen options={{
          }} name="Login" component={LoginPage} />

          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Dashboard" component={DashboardPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
