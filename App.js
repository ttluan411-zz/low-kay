import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ""
  }

  handleChange = val => {
    this.setState({
      placeName : val
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Type in place"
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.handleChange}
        />
        <Button 
          title="Add"
          style={styles.placeButton}
        />
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
  }
});
