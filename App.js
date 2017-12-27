import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
export default class App extends React.Component {
  state = {
    places: []
  };

  handleSubmit = () => {
    if (this.state.placeName.trim()==="") {
      return;
    }
    
    this.props.onPlaceAdded(this.state.placeName)
};
  
  render() {
    const placesOutput = this.state.places.map((place,i) => (
        <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded= />
        <View style={styles.listContainer}> {placesOutput} </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: "100%"
  }
});
