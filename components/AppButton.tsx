import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { phoneHeight } from "../utils/dimensions";
import AppText from "./AppText";
import { colors } from "../utils/colors";

export default function AppButton({
    children,
    onPress,
    bgColor = "#13B8A8",
    color = colors.white,
    disabled,
    style,
}) {

    return (
        <TouchableOpacity
            style={{
                width: "100%",
                backgroundColor: bgColor,
                borderRadius: 1000,
                marginBottom: 10,
                ...style,
            }}
            onPress={onPress}
        >
            <AppText
                disabled={disabled}
                style={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    paddingTop: (phoneHeight * 0.04) / 2,
                    paddingBottom: (phoneHeight * 0.04) / 2,
                    fontSize: 18,
                    borderColor: bgColor,
                    color: color,
                    ...style,
                }}
            >
                {children}
            </AppText>
        </TouchableOpacity>
    );
}
