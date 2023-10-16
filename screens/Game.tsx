import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, View, Text, FlatList} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import {Direction} from "../consts/common";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/Instruction";
import {Ionicons} from "@expo/vector-icons"
import GuessLogs from "../components/game/GuessLogs";

export interface IGameScreeProps {
    userNumber: number,
    onGameOverHandler: () => void
    guessSetter:  (count: number) => void

}

const generateNumbers = (min: number, max: number, exclude: number): number => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude && rndNum !== max) {
        return generateNumbers(min, max, exclude)
    }
    return rndNum;
}

let minBoundary: number = 1
let maxBoundary: number = 100

export const GameScreen: React.FC<IGameScreeProps> = ({userNumber, onGameOverHandler, guessSetter}) => {
    const [guesses, setGuesses] = useState<number[]>([])
    const initialGuess: number = generateNumbers(1, 100, userNumber)
    const [currentGuess, setCurrentGues] = useState<number>(initialGuess)
    const guessLength = guesses.length

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOverHandler()
            guessSetter(guesses.length)
        }
    }, [currentGuess, userNumber, onGameOverHandler])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, []);
    const nextGuessHandler = (direction: Direction): void => {

        if ((direction === Direction.lower && currentGuess < userNumber) || (direction === Direction.higher && currentGuess > userNumber)) {
            Alert.alert("Don't lie", "You know is not true", [{"text": "Sorry", style: "cancel"}])
            return;
        }
        if (direction === Direction.lower) {
            maxBoundary = currentGuess
        }
        if (direction == Direction.higher) {
            minBoundary = currentGuess + 1
        }
        const newNumber = generateNumbers(minBoundary, maxBoundary, currentGuess)
        setCurrentGues(newNumber)
        setGuesses((guesses) => [...guesses, newNumber]);
    }

    return (
        <View style={styles.baseContainer}>
            <Title>Opponent's Guess</Title>
            <NumberContainer desiredNumber={currentGuess}/>
            <Card>
                <>
                    <InstructionText text={"Higher or lower?"} styleProp={styles.instrText}/>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>

                            <PrimaryButton onPress={nextGuessHandler.bind(this, Direction.higher)}>
                                <Ionicons name={"md-add"} size={24} color={"white"}/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, Direction.lower)}>
                                <Ionicons name={"md-remove"} size={24} color={"white"}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guesses}
                    renderItem={
                    (itemData) => <GuessLogs  roundNumber={guessLength - itemData.index} currentGuess={itemData.item}/>}
                    keyExtractor={(item) => `${item}`}
                />
            </View>
        </View>
    )
}
export default GameScreen


const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        padding: 12,
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1,
    },
    instrText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})