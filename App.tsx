import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardOnePage from './pages/OnboardPages/OnboardOnePage';
import OnboardTwoPage from './pages/OnboardPages/OnboardTwoPage';
import OnboardThreePage from './pages/OnboardPages/OnboardThreePage';
import LoginPage from './pages/Authpages/LoginPage';
import SignUpPage from './pages/Authpages/SignUpPage';
import ProfilePage from './pages/Authpages/ProfilePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="OnboardOne" component={OnboardOnePage} />
          <Stack.Screen name="OnboardTwo" component={OnboardTwoPage} />
          <Stack.Screen name="OnboardThree" component={OnboardThreePage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Sign" component={SignUpPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
