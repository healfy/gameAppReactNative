import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import {StatusBar} from "expo-status-bar";
import Colors from "../../consts/colors";
import {LinearGradient} from "expo-linear-gradient";

const LoadingScreen = () => {
    return (
        <View style={{flex:1}}>
            <View style={styles.statusBarContainer}>
                <StatusBar style="light"/>
            </View>
            <LinearGradient style={styles.root} colors={[Colors.primaryDarkBrown, Colors.gradientGrey]}>
                <LottieView
                    source={require("../../assets/animation_lndbp315.json")}
                    style={styles.image}
                    autoPlay
                    resizeMode="contain"
                />
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 14,
    },
    image: {
        width: 200,
        height: 200,
        aspectRatio: 2,
        marginTop: "30%",
    },
    statusBarContainer: {
        backgroundColor: Colors.primaryDarkBrown,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.warmGray,
    },
});

export default LoadingScreen