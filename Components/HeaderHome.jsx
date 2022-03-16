import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HeaderHome() {

    const user = useSelector(state => state.user)
    
    const [fontsLoaded] = useFonts({Lobster_400Regular});

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Winegram</Text>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <MaterialIcons name="add-box" size={24} color="black" />
                <Ionicons name="heart" size={24} color="black" style={{ marginLeft: 12 }} />
                <FontAwesome5 name="facebook-messenger" size={22} color="black" style={{ marginLeft: 12 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100vw",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: "10%",
        alignItems: "center"
    },
    logo: {
        fontFamily: "Lobster_400Regular",
        alignItems: "center",
        fontSize: 22,
    }
})