import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import ShopComponent from "../Components/ShopComponent";

export default function ShopScreen () {
    return (
        <ScrollView>            
            <ShopComponent />
        </ScrollView>
    )
}