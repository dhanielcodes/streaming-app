import React, { useState } from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import AppText from '../../components/AppText';
import { colors } from '../../utils/colors';
import AppButton from '../../components/AppButton';
import { phoneHeight, phoneWidth } from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/icons/backIcon';
import AppInput from '../../components/AppInput';

export default function SignUpPage(): JSX.Element {
    const navigation = useNavigation()
    const [name, setName] = useState()
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.dark, paddingTop: phoneHeight * 0.12 / 2 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
                    <BackIcon onPress={() => {
                        navigation.goBack()
                        console.log('go back')
                    }} width={phoneWidth * 0.6 / 20} height={phoneHeight * 0.6 / 20} />
                    <AppText style={{ fontSize: phoneWidth * 0.18 / 2, fontFamily: 'Inter-Bold', marginTop: 30, marginBottom: 70 }}>Create New Account</AppText>
                    <AppInput setText={setName} placeholder='Username' />
                    <AppInput setText={setName} placeholder='Password' />
                    <View style={{ marginTop: 30 }}>
                        <AppButton onPress={() => {
                            navigation.navigate('Profile')
                        }}>Sign Up</AppButton>
                    </View>
                    <AppText style={{ fontSize: phoneWidth * 0.07 / 2, marginTop: 20, marginBottom: 50, textAlign: 'center' }}>Forgot Password</AppText>

                </View>
                <View style={{ padding: 0 }}>
                    <AppText style={{ fontSize: phoneWidth * 0.07 / 2, marginTop: 20, marginBottom: 50, textAlign: 'center' }}>Already have an account? <AppText onPress={() => {
                        navigation.push('Login')
                    }}>Sign in.</AppText></AppText>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
