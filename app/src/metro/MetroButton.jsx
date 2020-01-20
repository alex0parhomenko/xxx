import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from "react-native";

export default class Metro extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        
    };

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <Image source={require('../../assets/metro.png')} style={styles.image}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 60,
        height: 60
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }
});