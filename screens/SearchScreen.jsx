import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import UserPostProfile from "../Components/UserPostProfile";

export default function SearchScreen () {
    return (
        <ScrollView>            
            <UserPostProfile />
        </ScrollView>
    )
}