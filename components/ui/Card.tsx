import React from "react";
import {View , StyleSheet} from "react-native";
import Colors from "../../consts/colors";

interface ICardProps {
    children: React.JSX.Element
}

const Card: React.FC<ICardProps> = ({children}) => {
    return (
        <View style={styles.baseContainer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    baseContainer: {
        marginHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        padding: 16,
        backgroundColor: Colors.warmGray,
        borderRadius: 8,
        elevation: 12,
        shadowColor: Colors.primaryDarkBrown,
        shadowOffset: {width: 3, height: 4},
        shadowRadius: 15,
        shadowOpacity: 1.45,
    },
})

export  default Card;