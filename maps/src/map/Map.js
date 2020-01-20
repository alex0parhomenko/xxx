import React, {Component} from "react";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {StyleSheet} from "react-native";

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMarker: {
                coordinate: undefined
            }
        }
    }

    changeMarker = (e) => {
        this.setState({
            currentMarker: {
                coordinate: e.nativeEvent.coordinate
            }
        });
    };

    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 55.751244,
                    longitude: 37.618423,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                onPress={this.changeMarker}
                showsUserLocation={true}
            >
                <Marker coordinate={this.state.currentMarker.coordinate} />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        left:0,
        right: 0,
        top:0,
        bottom: 0,
        position: 'absolute'
    },
});