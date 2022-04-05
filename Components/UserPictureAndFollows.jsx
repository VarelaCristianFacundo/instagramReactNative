import React from "react";

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function UserPictureAndFollows(props) {

    const { user } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={{width: 85, height: 85, borderWidth: 1, borderColor: 'purple', borderRadius: 50, position: 'relative'}}>
                <Image
                    style={styles.userPicture}
                    source={{ uri: user.profilePicture }}
                />
                </View>
            </TouchableOpacity>

            <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.posts}</Text>
                <Text>Posts</Text>
            </View>
            <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.followers}</Text>
                <Text>Followers</Text>
            </View>
            <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.following}</Text>
                <Text>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
        position: "absolute",
        alignSelf: "center",
        top: 3,
        left: 3
    },
    container: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    followsContainer: {
        alignContent: "center",
        justifyContent: "center",
    },
    textBold: {
        fontWeight: "bold",
        textAlign: "center"
    }
})