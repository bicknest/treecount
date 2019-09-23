import React, {Component} from 'react';
import {Button} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState>;
};

export default class HomeScreen extends Component<Props> {

    handleNext = () => {
        const {navigate} = this.props.navigation;
        navigate('Profile');
    };

    render() {
        const {navigate} = this.props.navigation;
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
