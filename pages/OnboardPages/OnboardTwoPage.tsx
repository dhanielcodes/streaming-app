import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import AppText from '../../components/AppText';
import { colors } from '../../utils/colors';
import Logo from '../../assets/icons/logo';
import AppButton from '../../components/AppButton';
import { phoneHeight, phoneWidth } from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';

export default function OnboardTwoPage(): JSX.Element {

    const navigation = useNavigation()

    return (
        <ImageBackground blurRadius={4} source={require('../../assets/images/onboard2.png')} resizeMode="cover" style={{ flex: 1, paddingTop: 30 }}>
            <View style={{ flex: 1 }}>
                <View style={{ paddingLeft: 20, paddingRight: 20, flex: 1 }}>
                    <Logo width={phoneWidth * 2.1 / 20} height={phoneHeight * 2.1 / 20} />
                </View>
                <View style={{ padding: 20 }}>
                    <AppText style={{ fontSize: phoneWidth * 0.18 / 2, fontFamily: 'Inter-Bold' }}>Easy payment & fast event ticket</AppText>
                    <AppText style={{ fontSize: phoneWidth * 0.09 / 2, opacity: 0.5, marginTop: 20, marginBottom: 50 }}>Stream is here to help you to find the best events based on your interests.</AppText>
                    <AppButton onPress={() => {
                        navigation.navigate({ name: 'OnboardThree' })
                    }}>Next</AppButton>
                </View>
            </View>
        </ImageBackground>
    );
}
