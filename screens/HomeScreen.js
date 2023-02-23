import { StyleSheet, StatusBar, SafeAreaView} from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import TracksList from "../components/TracksList";

export default function HomeScreen({ navigation }) {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    let contentDisplayed = null;
  
    if (token) {
      contentDisplayed = (
      <TracksList tracks={tracks} navigation={navigation}/>
      );
    } else {
      contentDisplayed = (<SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>)
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto"/>
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
  