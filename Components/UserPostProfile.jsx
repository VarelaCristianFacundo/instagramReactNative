import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { FakePicturesData } from "../FakePicturesData";

export default function UserPostProfile (props){

    const Story = (props) => {
        return(
            <TouchableOpacity>
                <View>
                    <Image source={{uri: props.image}} style = {styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }

    return (        
        <View>
            <FlatList
            data={FakePicturesData}
            renderItem={({item}) => <Story image={item.url} name={item.name}/>}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            />
            
            
        </View>
        
    )
}

const styles = StyleSheet.create ({    
    image: {
        width: Dimensions.get('window').width/3,
        aspectRatio: 1,
    },
    text: {
        textAlign: "center"
    }
})