import {View, Text, Pressable, StyleSheet} from "react-native";
import React from "react";
import Colors from "../../consts/colors";

export interface IPrimaryButton {
    children: React.ReactNode
    onPress: () => void
}

const PrimaryButton: React.FC<IPrimaryButton> = ({children, onPress}) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={({pressed}) => pressed
                    ? [styles.pressed, styles.innerContainer]
                    : styles.innerContainer} onPress={onPress}
                       android_ripple={{"color": "#8b8d31"}}>

                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>


    )
}

export default PrimaryButton


const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    innerContainer: {
        backgroundColor: Colors.primaryDarkBrown,
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: Colors.primaryDarkBrown,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.1,
        elevation: 2,
    },
    text: {
        textAlign: "center",
        color: Colors.buttonPrimaryText,
    },
    pressed: {
        opacity: 0.75
    }
})