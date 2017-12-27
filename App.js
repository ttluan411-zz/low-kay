import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []

  };

  handleChange = val => {
    this.setState({
      placeName : val
    })
  };

  handleSubmit = () => {
    if (this.state.placeName.trim()==="") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };


  render() {
    const placesOutput = this.state.places.map((place,i) => (
        <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Type"
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.handleChange}
        />
        <Button 
          title="Add"
          style={styles.placeButton}
          onPress={this.handleSubmit}
        />
        </View>  
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
