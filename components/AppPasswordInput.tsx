import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { colors } from '../utils/colors';
import { phoneHeight } from '../utils/dimensions';

export default function AppPasswordInput({ setText, placeholder, style }): JSX.Element {
  const [color, setColor] = useState(colors.dark)
  const [showPassword, setShowPassword] = useState(true)
  return (
    <View style={{
      marginBottom: (phoneHeight * 0.07) / 2,
      width: '100%',
      ...style

    }}>
      <TextInput
        onFocus={() => {
          setColor(colors.mainColor)
        }}
        onBlur={() => {
          setColor(colors.dark)

        }}
        selectTextOnFocus={true}
        style={{
          padding: (phoneHeight * 0.06) / 2,
          backgroundColor: colors.darkTwo,
          borderRadius: 100,
          color: '#FFF',
          borderColor: color,
          borderWidth: 1
        }}
        placeholder={placeholder}
        placeholderTextColor="#ffffffb4"
        onChangeText={val => {
          setText(val);
        }}
        secureTextEntry={showPassword}
      />
    </View>
  );
}
