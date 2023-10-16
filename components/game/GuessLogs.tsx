import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../../consts/colors";

interface IGuessLogsProps {
    roundNumber: number
    currentGuess: number
}

const GuessLogs: React.FC<IGuessLogsProps> = ({roundNumber, currentGuess}) => {
    return <View style={styles.listItem}>
        <Text style={styles.text}># {roundNumber}</Text>
        <Text style={styles.text} >Opponent's Guess: {currentGuess}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: Colors.gradientGrey,
        borderWidth:1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width:0, height: 0},
        shadowOpacity: 0.32,
        shadowRadius: 3,
    },
    text: {
        fontFamily: "open-sans"
    }
})

export default GuessLogs