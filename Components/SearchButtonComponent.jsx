import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchButtonComponent(props) {

    return (
        <SafeAreaView style={styles.button}>
            <View style ={{flexDirection:"row"}}>
                <Ionicons name="search" size={18} color="black" style={{ marginLeft: 12 }} />
                <Text style={styles.text}>{props.buttonName}</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width - (Dimensions.get('window').width * 0.1),
        height: 30,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    text: {
        textAlign: "center",
    }
})