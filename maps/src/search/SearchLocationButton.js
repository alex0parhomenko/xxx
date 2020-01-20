import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, TextInput, StatusBar} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class SearchLocationButton extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSearchScreen = search => {
    console.info("navigateToSearchScreen")
    this.props.navigateToSearchScreen();
  };

  render() {
    return (
      <SearchBar style={styles.input}
        placeholder='Where you go?'
        round
        noIcon
        lightTheme
        showsCancelButtonWhileEditing={false}
        onChangeText={this.navigateToSearchScreen}
        onSubmitEditing={this.navigateToSearchScreen}
        onBlur={this.navigateToSearchScreen}
        returnKeyType="search"
      />
    );
  }
}

const styles = StyleSheet.create({
    input: {
      backgroundColor:"#FBFBFB",
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent'
    }
});