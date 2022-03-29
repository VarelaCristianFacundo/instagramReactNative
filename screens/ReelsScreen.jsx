import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { StyleSheet } from "react-native";
import StoryComponent from "../Components/StoryComponent";
import PostListHome from "../Components/PostListHome";
import ReelsComponent from "../Components/ReelsComponent";

export default function ReelsScreen() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const user = await axios.get('https://randomuser.me/api/');
        const newUser = {
            username: user.data.results[0].login.username,
            profilePicture: user.data.results[0].picture.large,
        }
        dispatch(setUser(newUser));

    }
    return (
        <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>    
            <ReelsComponent />
        </ScrollView>
    )
}