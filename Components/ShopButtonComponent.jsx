import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ShopButtonComponent(props) {

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.buttonName}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "gray",        
        borderRadius: 5,
        margin: 3,
        padding: 3,    
        marginLeft: 15,    
        backgroundColor: "white",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
    }
})