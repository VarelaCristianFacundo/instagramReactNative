import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ButtonComponent from "./ButtonComponent";
import SearchButtonComponent from "./SearchButtonComponent";

export default function SearchHeader() {

    const user = useSelector(state => state.user)

    return (
        <View>
            <View style ={styles.container}>                
                <SearchButtonComponent buttonName={" Search"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
    }
});