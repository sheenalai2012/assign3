import { Pressable, Text, StyleSheet, Image } from "react-native";
import { Images, Themes } from "../assets/Themes";


const SpotifyAuthButton = ({authenticationFunction}) => {
    return (
        <Pressable style={styles.authButton} onPress={authenticationFunction}>
            <Image style={styles.buttonLogo} source={Images.spotify}></Image>
            <Text style={styles.authText}>Connect with Spotify</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    authButton: {
        backgroundColor: Themes.colors.spotify,
        borderRadius: 99999999,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
    },
    authText: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 8,
        textTransform: 'uppercase'
    },
    buttonLogo: {
        height: 15,
        width: 15
    }
});

export default SpotifyAuthButton;