import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { FakePostData } from "../FakePostData";
import ShopButtonComponent from "./ShopButtonComponent";
import { ScrollView } from "react-native-web";

export default function ShopComponent(props) {

    const Story = (props) => {
        return (
            <View>
                <View>
                    <Image source={{ uri: props.image }} style={styles.image} />
                </View>
            </View>
        )
    }

    return (
        <View>
            <View style={{ flexDirection: "column" }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ShopButtonComponent buttonName={"Shops"} />
                    <ShopButtonComponent buttonName={"Videos"} />
                    <ShopButtonComponent buttonName={"Editors' picks"} />
                    <ShopButtonComponent buttonName={"Collections"} />
                    <ShopButtonComponent buttonName={"Guides"} />
                </ScrollView>
            </View>
            <FlatList
                data={FakePostData}
                renderItem={({ item }) => <Story image={item.image} avatar={item.user.avatar} title={item.title} likes={item.likes} username={item.user.username} />}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width/2,
        aspectRatio: 1,
        margin: 1,
    },
    text: {
        textAlign: "center"
    }
})