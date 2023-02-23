import { StyleSheet, SafeAreaView, Text, Pressable, Image, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import TracksList from "./components/TracksList";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{title: "Song Details", headerBackTitle: "Back"}}></Stack.Screen>
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} options={{title: "Song Preview", headerBackTitle: "Back"}}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}
