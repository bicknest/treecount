import * as React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {primaryColor3, primaryColor7} from '../../styles/colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface OwnProps {}

interface StateProps {}

type Props = OwnProps & StateProps;

type State = {};

class AuthView extends React.Component<Props, State> {
  render() {
    return (
      <View style={{backgroundColor: primaryColor3}}>
        <FontAwesomeIcon name="tree" style={{backgroundColor: primaryColor7}} />
        <TextInput />
        <TextInput />
      </View>
    );
  }
}
