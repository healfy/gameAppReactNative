import React, {useState} from "react";
import {TextInput, View, StyleSheet, Alert, Text} from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../consts/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/Instruction";

export interface IStartGameScreenProps {
    onPickNumberHandler: (number: number) => void
}

const StartGameScreen: React.FC<IStartGameScreenProps> = ({onPickNumberHandler}) => {
    const confirmHandler = (): void => {
        const chosenNumber: number | any = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number",
                "Number has to be a number between 1 and 99",
                [{text: "Okay", style: "destructive", onPress: resetHandler}]
            )
            return
        }
        onPickNumberHandler(chosenNumber);
    }
    const resetHandler = (): void => {
        setEnteredNumber("")
    }
    const numberInputHandler = (enteredText: string): void => {
        setEnteredNumber(enteredText)
    }
    const [enteredNumber, setEnteredNumber] = useState<string>("")
    return (
        <View style={styles.rootContainer}>
            <Title>Guess my Number</Title>
            <Card>
                <>
                    <InstructionText text={"Enter a number"}/>
                    <TextInput
                        style={styles.inputText}
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={numberInputHandler}
                        autoCapitalize="none"
                        value={enteredNumber}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmHandler}> Confirm</PrimaryButton>
                        </View>
                    </View>
                </>
            </Card>
        </View>

    );
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 40,
        alignItems: "center"
    },

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
    inputText: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.primaryDarkBrown,
        borderBottomWidth: 2,
        color: Colors.primaryDarkBrown,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1,
    }
})