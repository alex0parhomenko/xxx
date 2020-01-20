import React, {Component} from 'react';
import {StyleSheet, View, Text, LogoT} from "react-native";
import {SearchBar} from 'react-native-elements';
import GooglePlacesInput from '../search/GooglePlaces';

export default class SearchScreen extends Component {
  state = {
    search: '',
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: "Map",
      headerTitle: "",
    };
  };

  updateSearch = search => {
    this.setState({ search });
  };

  navigateToMainScreen = () => {
    this.props.navigation.navigate('MainScreen')
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <GooglePlacesInput/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 9
  },
  searchContainer: {
    flex: 1
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#BA55D3',
  },
  SeparatorLine: {
    width: 20,
  },
  input: {
  }
});