import {Text, View, StyleSheet} from "react-native";
import React from "react";
import Colors from "../../consts/colors";

export interface INumberContainerProps {
    desiredNumber: number
}
const NumberContainer: React.FC<INumberContainerProps> = ({desiredNumber}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {desiredNumber}
            </Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        borderWidth:4,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: Colors.primaryDarkBrown,
        shadowOffset: {width: 3, height: 4},
        shadowRadius: 15,
        shadowOpacity: 1.45,
        borderColor: Colors.primaryDarkBrown,
        backgroundColor: Colors.warmGray,
    },
    text: {
        fontSize: 36,
        fontWeight: "bold",
        color: Colors.primaryDarkBrown,
    },
})


export default NumberContainer