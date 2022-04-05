import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { FakePicturesData } from "../FakePicturesData";
import { FakePostData } from "../FakePostData";
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"

export default function ReelsComponent(props) {

    const Story = (props) => {
        return (
            <View>
                <View>
                    <Image source={{ uri: props.image }} style={styles.image} />
                </View>

                <View style={{flexDirection: "column", justifyContent: "space-between", marginVertical: 350, marginLeft: 270, position:"absolute"}}>
                    <View style={{ flexDirection: "column", alignItems: "center"}}>                        
                        <AntDesign name="hearto" size={24} color="white" style={{ marginTop: 20}} />
                        <Feather name="message-circle" size={24} color="white" style={{ marginTop: 20 }} />
                        <Feather name="send" size={24} color="white" style={{ marginTop: 20 }} />
                        <Text style={{fontWeight: "bold", marginTop: 20, color:"white"}}>{}...</Text>
                    </View>
                </View>
                <Text style={{fontWeight: "bold", fontSize:22, marginLeft: 10}}>{props.likes} Likes</Text>
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
        height: Dimensions.get('window').height,
        resizeMode: "cover"
    },
    text: {
        textAlign: "center"
    }
})