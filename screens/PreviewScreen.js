import { StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';
import React from "react";

const PreviewScreen = ({ navigation, route }) => {
    const { url } = route.params;
    return (
        <WebView source={{ uri : url}}/>
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({
    
});