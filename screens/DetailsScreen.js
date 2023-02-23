import { StyleSheet, Text, View } from "react-native-web";
import React from "react";
import WebView from "react-native-webview";

const DetailsScreen = ({ navigation, route}) => {
    const { url } = route.params;
    return (
        <WebView source={{ uri : url}}/>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({

});