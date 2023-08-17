import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import AppText from '../../components/AppText';
import { colors } from '../../utils/colors';
import Logo from '../../assets/icons/logo';
import AppButton from '../../components/AppButton';
import { phoneHeight, phoneWidth } from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';

export default function OnboardThreePage(): JSX.Element {
    const navigation = useNavigation()

    return (
        <ImageBackground blurRadius={4} source={require('../../assets/images/onboard3.png')} resizeMode="cover" style={{ flex: 1, paddingTop: 40 }}>
            <View style={{ flex: 1 }}>
                <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
                    <Logo width={phoneWidth * 2.1 / 20} height={phoneHeight * 2.1 / 20} />
                </View>
                <View style={{ padding: 20 }}>
                    <AppText style={{ fontSize: phoneWidth * 0.18 / 2, fontFamily: 'Inter-Bold' }}>Let’s go to your favourite event now</AppText>
                    <AppText style={{ fontSize: phoneWidth * 0.09 / 2, opacity: 0.5, marginTop: 20, marginBottom: 50 }}>Stream is here to help you to find the best events based on your interests.</AppText>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, marginRight: 20 }}>
                            <AppButton onPress={() => {
                                navigation.navigate({ name: 'Login' })
                            }} >Login</AppButton>
                        </View>
                        <View style={{ flex: 1, }}>
                            <AppButton onPress={() => {
                                navigation.navigate({ name: 'Sign' })
                            }} bgColor={colors.white} color={colors.black}>Sign up</AppButton>
                        </View>

                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
