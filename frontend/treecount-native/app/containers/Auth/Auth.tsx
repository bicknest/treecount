import * as React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {primaryColor3, primaryColor7} from '../../styles/colors';
import {contentMargin} from '../../styles/spacing';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Container from '../container';

interface OwnProps {}

interface StateProps {}

type Props = OwnProps & StateProps;

type State = {};

const styles = StyleSheet.create({
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: contentMargin,
    },
});
    

export default class AuthView extends React.Component<Props, State> {
  render() {
    return (
        <Container>
            <View style={styles.iconWrapper} >
                <FontAwesomeIcon name="tree" color={primaryColor7} size={150} />
          </View>
        </Container>
    );
  }
}
