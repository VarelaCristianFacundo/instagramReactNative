import { Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeHeader from "./Components/HomeHeader";
import ProfileHeader from "./Components/ProfileHeader";
import SearchHeader from "./Components/SearchHeader";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReelsScreen from "./screens/ReelsScreen";
import SearchScreen from "./screens/SearchScreen";
import ShopScreen from "./screens/ShopScreen";

const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff',
    },
};

export default function Navigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'search' : 'search-outline'
                        } else if (route.name === 'Reels') {
                            iconName = focused ? 'videocam' : 'videocam-outline'
                        } else if (route.name === 'Shop') {
                            iconName = focused ? 'cart' : 'cart-outline'
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={"black"} />
                    },
                    tabBarShowLabel: false,
                    headerRightContainerStyle: {
                        paddingRight: 10
                    }
                })}
            >

                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        headerTitle: () => <HomeHeader />
                    }}
                />
                <Tab.Screen name="Search" component={SearchScreen}
                    options={{
                        headerTitle: () => <SearchHeader />
                    }}
                />
                <Tab.Screen name="Reels" component={ReelsScreen} options={{
                    headerTransparent: true,
                    headerRight: (props) => (
                        <Feather name="camera" size={24} color="black" />
                    )
                }} />
                <Tab.Screen name="Shop" component={ShopScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        headerTitle: () => <ProfileHeader />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}