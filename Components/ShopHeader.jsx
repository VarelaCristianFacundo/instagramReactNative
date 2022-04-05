import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ShopSearchButtonComponent from "./ShopSearchButtonComponent";
import { Ionicons } from "@expo/vector-icons";

export default function ShopHeader() {

    const user = useSelector(state => state.user)

    return (
        <View style ={styles.container}>                
            <ShopSearchButtonComponent buttonName={" Search"}/>
            <Ionicons name="cart-outline" size={30} color="black" />
            <Ionicons name="reorder-three-outline" size={30} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
    }
});