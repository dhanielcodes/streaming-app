import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Image } from 'react-native';
import { colors } from '../../utils/colors';
import AuthLayout from '../../layouts/AuthLayout';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppPasswordInput from '../../components/AppPasswordInput';
import AppButton from '../../components/AppButton';
import { phoneHeight, phoneFontScale } from '../../utils/dimensions';
import * as ImagePicker from 'react-native-image-picker';

export default function ProfilePage({ navigation }): JSX.Element {
    const [isername, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fileResponse, setFileResponse] = useState([]);
    return (
        <AuthLayout title="Profile" marginBottom={12}>
            <KeyboardAvoidingView style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{ marginBottom: 30, alignSelf: 'center' }}>
                    {fileResponse?.resourcePath?.assets?.[0]?.uri ? (
                        <Image
                            source={{ uri: fileResponse?.resourcePath?.assets?.[0]?.uri }}
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
                                fontSize: (phoneFontScale * 30) / 2,
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
                                fontSize: (phoneFontScale * 30) / 2,
                            }}>
                            Replace Image
                        </AppText>
                    )}

                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <AppInput style={{ flex: 1, marginRight: 10, marginBottom: phoneHeight * 0.036 / 2 }} setText={setEmail} placeholder="First Name" />
                        <AppInput style={{ flex: 1, marginBottom: phoneHeight * 0.036 / 2 }} setText={setEmail} placeholder="Last Name" />
                    </View>
                    <View>
                        <AppInput style={{ marginBottom: phoneHeight * 0.036 / 2 }} setText={setEmail} placeholder="@" />

                        <AppInput style={{ marginBottom: phoneHeight * 0.036 / 2 }} setText={setEmail} placeholder="Email" />

                        <AppInput style={{ marginBottom: phoneHeight * 0.036 / 2 }} setText={setEmail} placeholder="Gender" />

                        <AppInput style={{ marginBottom: phoneHeight * 0.036 / 2 }} setText={setEmail} placeholder="Date of Birth" />
                    </View>
                </View>
                <View style={{
                    // marginTop: phoneHeight * 0.09 / 2
                }}>

                    <AppButton >
                        Continue
                    </AppButton>
                </View>

            </KeyboardAvoidingView>
        </AuthLayout>
    );
}
