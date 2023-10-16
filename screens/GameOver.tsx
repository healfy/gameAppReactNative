import {Text, View, Image, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../consts/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import React from "react";

interface IGameOverScreenProps {
    enteredNumber: number,
    countRounds: number,
    onStartGame: React.Dispatch<React.SetStateAction<void>>
}

const GameOverScreen: React.FC<IGameOverScreenProps> = ({enteredNumber, countRounds, onStartGame}) => {
    return (
        <View style={styles.root}>
            <Title>Game is Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/images/finish.jpg")} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{countRounds}</Text> rounds to guess number <Text style={styles.highlight}>{enteredNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartGame}> Start new game </PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primaryDarkBrown,
        margin: 30,
        marginTop: 40,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",
        opacity: 0.85,
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primaryDarkBrown
    }
})

export default GameOverScreen