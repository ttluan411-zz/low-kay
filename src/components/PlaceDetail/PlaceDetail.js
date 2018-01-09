import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.placeImage} />
                <Text>{props.selectedPlace.placeName}</Text>
            </View>
        )
    }
    return(
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContent}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red"/>
                    <Button title="Close"/>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalContent:{
        margin: 22
    }
})

export default placeDetail;