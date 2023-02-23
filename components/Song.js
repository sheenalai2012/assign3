import { stringLiteral } from '@babel/types';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import { Images, Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import Ionicons from '@expo/vector-icons/Ionicons';


const Song = ({ song, index, navigation }) => {
    return (
        <View style={styles.songContainer}>

            <Pressable onPress={() => navigation.navigate("PreviewScreen", {url: song.previewUrl})}>
                <Ionicons style={styles.play} name="play-circle" size={24} />
            </Pressable>
            <Pressable style={styles.songContainer} onPress={() => navigation.navigate("DetailsScreen", {url: song.externalUrl})}>
                <Image style={styles.songImage} source={{uri: song.imageUrl}}></Image>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={styles.songText}> {song.songTitle} </Text>
                    <Text  numberOfLines={1} style={[styles.songText, styles.artistText]}> {song.songArtists.map(artist => artist.name).join(", ")} </Text>

                </View>
                <Text numberOfLines={1} style={[styles.songText, styles.albumText]}> {song.albumName} </Text>
                <Text style={styles.songText}> {millisToMinutesAndSeconds(song.duration)} </Text>
            </Pressable>
        </View>
           
    );
};

const styles = StyleSheet.create({
    songContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'column',
        width: 100
    },
    songText: {
        color: 'white'
    },
    songImage: {
        width: 65,
        height: 65,
        margin: 10
    },
    albumText: {
        width: 100,
        paddingLeft: 10
    },
    play: {
        width: 40,
        padding: 10,
        color: Themes.colors.spotify
    },
    artistText: {
        color: Themes.colors.gray
    }
});

export default Song;