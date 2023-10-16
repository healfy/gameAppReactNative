import React from "react";
import {Text, StyleSheet} from "react-native";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface IInstructionTextProps {
    text: string,
    styleProp?: StyleProp<TextStyle> | undefined
}

const InstructionText: React.FC<IInstructionTextProps> = ({text, styleProp}) => {
    return (
        <Text style={[styles.instructionText, styleProp]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 24,
        fontFamily: "open-sans"
    },
})

export default InstructionText