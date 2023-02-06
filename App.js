import { StyleSheet, SafeAreaView, Text, Pressable, Image, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import TracksList from "./components/TracksList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = (
    <TracksList tracks={tracks}/>
    );
  } else {
    contentDisplayed = (<SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>)
  }
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
