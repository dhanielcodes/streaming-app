import React, {useCallback, useState} from 'react';
import {View, SafeAreaView, ScrollView, Button} from 'react-native';
import AppText from '../../components/AppText';
import {colors} from '../../utils/colors';
import AppButton from '../../components/AppButton';
import {phoneFontScale, phoneHeight, phoneWidth} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/icons/backIcon';
import AppInput from '../../components/AppInput';
import * as ImagePicker from 'react-native-image-picker';

export default function ProfilePage(): JSX.Element {
  const navigation = useNavigation();
  const [name, setName] = useState();

  const [fileResponse, setFileResponse] = useState([]);

  console.log(fileResponse);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.dark,
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <BackIcon
          onPress={() => {
            navigation.goBack();
          }}
          width={(phoneWidth * 0.6) / 20}
          height={(phoneHeight * 0.6) / 20}
        />
        <AppText
          style={{
            fontSize: (phoneWidth * 0.18) / 2,
            fontFamily: 'Inter-Bold',
            marginTop: 30,
            marginBottom: 30,
          }}>
          Profile{' '}
        </AppText>
        <ScrollView>
          <View style={{marginBottom: 20, alignSelf: 'center'}}>
            <View
              style={{
                backgroundColor: colors.darkTwo,
                width: 100,
                height: 100,
                borderRadius: 2000,
                alignSelf: 'center',
                marginBottom: 10,
              }}></View>

            <AppText
              onPress={() =>
                ImagePicker.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  response => {
                    console.log(response);
                    setFileResponse({
                      resourcePath: response,
                    });
                  },
                )
              }
              style={{
                textAlign: 'center',
                color: '#665EE0',
                fontSize: (phoneFontScale * 40) / 2,
              }}>
              Add Photo
            </AppText>
            {/* <Button
              title="Add Photo"
              color={'#665EE0'}
              onPress={() =>
                ImagePicker.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  response => {
                    console.log(response);
                    setFileResponse({
                      resourcePath: response,
                    });
                  },
                )
              }
            /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <AppInput
              style={{flex: 0.49, marginBottom: (phoneHeight * 0.03) / 2}}
              setText={setName}
              placeholder="First Name"
            />
            <AppInput
              style={{flex: 0.49, marginBottom: (phoneHeight * 0.03) / 2}}
              setText={setName}
              placeholder="Last Name"
            />
          </View>
          <AppInput
            style={{flex: 1, marginBottom: (phoneHeight * 0.03) / 2}}
            setText={setName}
            placeholder="Last Name"
          />
          <AppInput
            style={{flex: 1, marginBottom: (phoneHeight * 0.03) / 2}}
            setText={setName}
            placeholder="Email"
          />
          <AppInput
            style={{flex: 1, marginBottom: (phoneHeight * 0.03) / 2}}
            setText={setName}
            placeholder="Gender"
          />
          <AppInput
            style={{flex: 1, marginBottom: (phoneHeight * 0.03) / 2}}
            setText={setName}
            placeholder="Date of Birth"
          />
        </ScrollView>
        <View>
          <AppButton>Continue</AppButton>
        </View>
      </SafeAreaView>
    </View>
  );
}
