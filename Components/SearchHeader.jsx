import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ButtonComponent from "./ButtonComponent";
import SearchButtonComponent from "./SearchButtonComponent";

export default function SearchHeader() {

    const user = useSelector(state => state.user)

    return (
        <View style ={styles.container}>                
            <SearchButtonComponent buttonName={" Search"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
});