import React from 'react';
import { Text } from 'react-native';
import { colors } from '../utils/colors';

export default function AppText({ children, style, onPress }): JSX.Element {
    return (
        <Text style={{ fontFamily: 'Inter-Medium', color: colors.white, ...style }} onPress={onPress}>{children}</Text>
    );
}
