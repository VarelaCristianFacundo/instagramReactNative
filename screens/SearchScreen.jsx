import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import UserPictureAndFollows from "../Components/UserPictureAndFollows";
import { useSelector } from "react-redux";
import UserInfo from "../Components/UserInfo";

import StoryComponent from "../Components/StoryComponent";
import UserPostProfile from "../Components/UserPostProfile";
import ButtonComponent from "../Components/ButtonComponent";

export default function SearchScreen () {
    return (
        <ScrollView>            
            <UserPostProfile />
        </ScrollView>
    )
}