import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Map from "../map/Map";
import SearchLocationButton from '../search/SearchLocationButton';

//

export default class MainScreen extends Component {
    static navigationOptions = {
      header: null,
      headerMode: 'none'
    };

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.mapContainer}>
                <Map/>
              </View>

              <TouchableOpacity style={styles.overlay} accessibilityRole={"none"}>
                <SearchLocationButton navigateToSearchScreen={() => this.props.navigation.navigate('SearchScreen')} />
              </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapContainer: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    searchContainer: {
      backgroundColor: 'transparent',
    },
    overlay: {
      position: 'absolute',
      top: 80,
      width: '90%',
      backgroundColor:"#FBFBFB",
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
    signup: {
      backgroundColor: 'transparent',
      width: "75%",
      borderRadius: 25,
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize:  27,
    },
});