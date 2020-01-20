import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Dimensions } from "react-native";

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const screenHeight = Math.round(Dimensions.get('window').height);

export default class GooglePlacesInput extends Component {

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search for your City!"
        onSubmitEditing={() => {
          console.info("OZOZO")
        }}
        onFail = {(error) => {
            console.info(error);
          }
        }
        query={{
          key: "AIzaSyDrGwdvCGD5M-d-za99BH1-igr8Ni5HBBs",
          language: 'en'
        }}
      />
    );
  }
}