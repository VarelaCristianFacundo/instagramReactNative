import React from "react";
import { Text, View } from "react-native";
import UserPictureAndFollows from "../Components/UserPictureAndFollows";
import { useSelector } from "react-redux";
import UserInfo from "../Components/UserInfo";
import ButtonComponent from "../Components/ButtonComponent";
import StoryComponent from "../Components/StoryComponent";

export default function ProfileScreen() {

    const user = useSelector(state => state.user);

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <UserPictureAndFollows user={user} />
            <UserInfo user={user} />
            <ButtonComponent buttonName={"Edit Profile"} />
            <StoryComponent />
        </View>
    )
}