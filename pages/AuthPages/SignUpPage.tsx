import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { colors } from '../../utils/colors';
import AuthLayout from '../../layouts/AuthLayout';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppPasswordInput from '../../components/AppPasswordInput';
import AppButton from '../../components/AppButton';
import { phoneHeight } from '../../utils/dimensions';

export default function SignUpPage({ navigation }): JSX.Element {
  const [isername, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <AuthLayout title="Create New Account">
      <KeyboardAvoidingView style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <AppInput setText={setEmail} placeholder="Email" />
        <AppPasswordInput setText={setPassword} placeholder="Password" />
        <AppButton onPress={() => {
          navigation.navigate('Profile')
        }}>
          Sign Up
        </AppButton>
        <AppText style={{
          textAlign: 'center',
          marginTop: phoneHeight * 0.06 / 2
        }}>Forgot Password</AppText>
        <AppText style={{
          textAlign: 'center',
          marginTop: phoneHeight * 0.54 / 2
        }}>Already have an account? <AppText onPress={() => {
          navigation.navigate('Login')
        }}>Sign in</AppText></AppText>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
