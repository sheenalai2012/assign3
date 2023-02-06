import { stringLiteral } from '@babel/types';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { Images, Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";


const Song = ({song, index}) => {
    // const minutes = Math.floor(song.duration / 60000);
    // let seconds = Math.round((song.duration / 1000) % 60);
    // if (seconds < 10) {
    //     seconds = "0" + seconds;
    // }

    return (
        <View style={styles.songContainer}>
            <Text style={[styles.songText, styles.songIndex]}> {index + 1} </Text>
            <Image style={styles.songImage} source={{uri: song.imageUrl}}></Image>
            <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.songText}> {song.songTitle} </Text>
                <Text  numberOfLines={1} style={[styles.songText, styles.artistText]}> {song.songArtists.map(artist => artist.name).join(", ")} </Text>

            </View>
            <Text numberOfLines={1} style={[styles.songText, styles.albumText]}> {song.albumName} </Text>
            <Text style={styles.songText}> {millisToMinutesAndSeconds(song.duration)} </Text>
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
    songIndex: {
        width: 20,
        color: Themes.colors.gray
    },
    artistText: {
        color: Themes.colors.gray
    }
});

export default Song;