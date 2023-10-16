import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../consts/colors";

export interface ITitleProps {
    children: React.ReactNode
}
const Title: React.FC<ITitleProps> = ({children}) => {
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.textContainer}>{children}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        padding:12,
        borderWidth: 2,
        borderRadius: 8,
        elevation: 12,
        shadowColor: Colors.primaryDarkBrown,
        shadowOffset: {width: 3, height: 4},
        shadowRadius: 15,
        shadowOpacity: 1.45,
        borderColor: Colors.primaryDarkBrown,
        backgroundColor: Colors.warmGray,
    },
    textContainer: {
        fontSize: 24,
        color: Colors.primaryDarkBrown,
        textAlign: "center",
        fontFamily: "open-sans-bold",
    }
})


export default Title