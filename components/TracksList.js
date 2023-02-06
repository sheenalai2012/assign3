import { View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { Images, Themes } from "../assets/Themes";
import Song from './Song';


const TracksList = ({tracks}) => {
    return (
    <View>
         <View style={styles.headingContainer}>
            <Image style={styles.headingLogo} source={Images.spotify}></Image>
            <Text style={styles.headingText}>My Top Tracks</Text>
        </View>
        <FlatList
            data={tracks}
            renderItem={({ item, index }) => {
                return (
                <Song song={item} index={index}/>);
            }}
            keyExtractor={(item) => item.id}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    headingText: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 16,
        fontSize: 24
    },
    headingLogo: {
        height: 20,
        width: 20
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default TracksList;