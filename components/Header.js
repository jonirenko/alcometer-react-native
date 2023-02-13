import React from "react";
import { Text, View } from "react-native";
import { lightStyle, darkStyle } from "../styles/Styles";

export default function Header() {
    return (
        <View>
            <Text style={lightStyle.header}>Alcometer</Text>
        </View>
    );
}