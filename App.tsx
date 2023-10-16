import {StatusBar} from 'expo-status-bar';
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet, ImageBackground, View, SafeAreaView, Text} from 'react-native';
import StartGameScreen from "./screens/StartGame";
import React, {useState, useEffect} from "react";
import GameScreen from "./screens/Game";
import Colors from "./consts/colors";
import GameOverScreen from "./screens/GameOver";
import * as Font from "expo-font"
import LoadingScreen from "./components/ui/Loading";


export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>(null)
    const [countGuesses, setCountGuesses] = useState<number>(0)
    const [gameIsOver, setGameIsOver] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(false)
    const onStartGame = () => {
        setUserNumber(null)
        setCountGuesses(0)
        setGameIsOver(false)
    }
    const [fontsLoaded, fontError] = Font.useFonts(
        {
            "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
            "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        }
    )
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(fontsLoaded), 2000);
        return () => clearTimeout(timer);
    }, [fontsLoaded]);

    if (!loaded) {
        return (
            <LoadingScreen/>
        );
    }
    const pickScreenHandler = (enteredNumber: number) => {
        setUserNumber(enteredNumber)
    }
    let screen: React.JSX.Element = <StartGameScreen onPickNumberHandler={pickScreenHandler}/>
    if (userNumber && !gameIsOver) {
        screen = <GameScreen userNumber={userNumber} onGameOverHandler={() => {
            setGameIsOver(true)
        }} guessSetter={setCountGuesses}/>
    }
    if (gameIsOver) {
        screen = <GameOverScreen enteredNumber={userNumber? userNumber: 0} countRounds={countGuesses} onStartGame={onStartGame}/>
    }
    return (
        <>
            <View style={styles.statusBarContainer}>
                <StatusBar style="light"/>
            </View>
            <LinearGradient colors={[Colors.primaryDarkBrown, Colors.gradientGrey]} style={styles.rootScreen}>
                <ImageBackground
                    source={require("./assets/images/s.jpeg")}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 14,
    },
    backgroundImage: {
        opacity: 0.20,
    },
    statusBarContainer: {
        backgroundColor: Colors.primaryDarkBrown,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.warmGray,
    },
});
