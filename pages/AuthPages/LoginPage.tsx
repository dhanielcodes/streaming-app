import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { colors } from '../../utils/colors';
import AuthLayout from '../../layouts/AuthLayout';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppPasswordInput from '../../components/AppPasswordInput';
import AppButton from '../../components/AppButton';
import { phoneHeight } from '../../utils/dimensions';

export default function LoginPage({ navigation }): JSX.Element {
  const [username, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <AuthLayout title="Login">
      <KeyboardAvoidingView style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>
          <AppInput setText={setEmail} placeholder="Email" />
          <AppPasswordInput setText={setPassword} placeholder="Password" />
          <AppButton onPress={() => {
            navigation.navigate('Profile')
          }}>
            Login
          </AppButton>
          <AppText style={{
            textAlign: 'center',
            marginTop: phoneHeight * 0.06 / 2
          }}>Forgot Password</AppText>
        </View>
        <AppText style={{
          textAlign: 'center',
          marginTop: phoneHeight * 0.64 / 2

        }}>Don’t have an account? <AppText onPress={() => {
          navigation.navigate('Sign')
        }}>Sign up</AppText></AppText>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
