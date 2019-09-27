import React, {Component} from 'react';
import {Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from '../../navigator';

interface Props {
    navigator: Navigator
};

export default class HomeScreen extends Component<Props> {

    handleNext = () => {
        const {navigator} = this.props;
        navigator.push({key: 'ProfileScreen'});
    };

    render() {
        const {navigator} = this.props;
        return (
        <View style={styles.container}>
            <Text> Welcome to TreeCount </Text>
            <Button
                title="Go to Profile"
                onPress={this.handleNext}
            />
        </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
