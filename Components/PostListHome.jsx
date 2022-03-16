import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { FakePicturesData } from "../FakePicturesData";
import { FakePostData } from "../FakePostData";
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"

export default function PostListHome(props) {

    const Story = (props) => {
        return (
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Image source={{ uri: props.avatar }} style={{ width: 30, height: 30, borderRadius: 20 }} />
                        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{props.username}</Text>
                    </View>
                    <Feather name="more-horizontal" size={24} color="black" />
                </View>

                <View>
                    <Image source={{ uri: props.image }} style={styles.image} />
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 10}}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <AntDesign name="hearto" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Feather name="message-circle" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Feather name="send" size={24} color="black" style={{ marginLeft: 10 }} />
                    </View>

                    <View>
                        <Fontisto name="favorite" size={28} color="black" style={{ marginRight: 10 }} />
                    </View>
                </View>
                <Text style={{fontWeight: "bold", marginLeft: 10}}>{props.likes} Likes</Text>
                <Text style={{marginLeft: 10, marginBottom: 15}}>{props.title}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={FakePostData}
            renderItem={({ item }) => <Story image={item.image} avatar={item.user.avatar} title={item.title} likes={item.likes} username={item.user.username} />}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
        />

    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: 400,
        resizeMode: "cover"
    },
    text: {
        textAlign: "center"
    }
})