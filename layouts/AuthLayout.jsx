import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from '../utils/colors';
import BackIcon from '../assets/icons/backIcon';
import AppText from '../components/AppText';
import {phoneFontScale, phoneHeight, phoneWidth} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
export default function AuthLayout({
  children,
  title = 'Title',
  desc,
  onPress,
  marginBottom = 50,
}) {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        backgroundColor: colors.dark,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        height: phoneHeight,
      }}>
      <View style={{marginTop: 50}}>
        <View
          style={{
            marginBottom: marginBottom,
            flex: 1,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}>
            <BackIcon width="20" height="20" />
          </TouchableWithoutFeedback>
          <AppText
            style={{
              fontSize: (phoneFontScale * 77) / 2,
              marginTop: (phoneHeight * 0.06) / 2,
              fontFamily: 'Inter-Bold',
            }}>
            {title}
          </AppText>
          {desc && (
            <AppText
              style={{
                fontSize: (phoneWidth * 0.08) / 2,
                opacity: 0.5,
                marginTop: 10,
              }}>
              {desc}
            </AppText>
          )}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          {children}
        </View>
      </View>
    </ScrollView>
  );
}
