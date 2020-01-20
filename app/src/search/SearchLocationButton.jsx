import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, TextInput} from "react-native";
import {SearchBar} from 'react-native-elements';

export default class SearchLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };

    }

    goToSearchLocationScreen = () => {
        this.props.navigateToSearchLocationScreen();
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}

const styles = StyleSheet.create({

});