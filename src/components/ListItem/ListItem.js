import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
        <Image source={props.placeImage} />
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default listItem;