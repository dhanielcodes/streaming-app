import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
  RefreshControl,
} from 'react-native';
import AppText from '../../components/AppText';
import {colors} from '../../utils/colors';
import AppButton from '../../components/AppButton';
import {phoneFontScale, phoneHeight, phoneWidth} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/icons/backIcon';
import AppInput from '../../components/AppInput';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default function DashboardPage(): JSX.Element {
  const navigation = useNavigation();
  const [name, setName] = useState();

  const [fileResponse, setFileResponse] = useState([]);
  const [todos, setTodos] = useState('');

  const getTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      console.log(res);
      setTodos(res.data);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.dark,
        paddingTop: (phoneHeight * 0.12) / 2,
      }}>
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        tintColor="#fff"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.dark,
          paddingLeft: 20,
          paddingTop: 20,
          paddingRight: 20,
        }}>
        <View style={{flex: 1}}>
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
          <AppText>{todos && JSON.stringify(todos)}</AppText>
          <View style={{marginBottom: 20, alignSelf: 'center'}}>
            {fileResponse?.resourcePath?.assets?.[0]?.uri ? (
              <Image
                source={{uri: fileResponse?.resourcePath?.assets?.[0]?.uri}}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 2000,
                  alignSelf: 'center',
                  marginBottom: 10,
                }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: colors.darkTwo,
                  width: 100,
                  height: 100,
                  borderRadius: 2000,
                  alignSelf: 'center',
                  marginBottom: 10,
                }}></View>
            )}

            {!fileResponse?.resourcePath?.assets?.[0]?.uri ? (
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
            ) : (
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
                Replace Image
              </AppText>
            )}
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
          <View>
            <AppButton>Continue</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
