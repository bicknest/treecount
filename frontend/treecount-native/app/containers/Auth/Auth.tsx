import * as React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from '../../components/icons/Icon';
import LargeText from '../../components/core/LargeText';
import {
    primaryColor2,
    primaryColor3,
    primaryColor5,
    primaryColor7,
    primaryColor8,
    primaryColor10,
    highlightSecondaryColor,
    secondaryColor4,
    secondaryColor8,
} from '../../styles/colors';
import {contentMargin} from '../../styles/spacing';

import Container from '../container';

interface OwnProps {}

interface StateProps {}

type Props = OwnProps & StateProps;

type State = {
    company: string,
    username: string,
    password: string,
};

const styles = StyleSheet.create({
    titleWrapper: {
        alignItems: 'center',
        marginTop: contentMargin * 4,
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: contentMargin * 3,
    },
    textInputWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: contentMargin * 3,
        marginHorizontal: contentMargin * 3,
    },
    textInput: {
        flex: 1,
        borderBottomColor: highlightSecondaryColor,
        borderBottomWidth: 1,
        fontSize: 20,
        marginLeft: contentMargin,
        marginRight: contentMargin * 3,
        color: secondaryColor8,
    },
});
    

export default class AuthView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            company: '',
            username: '',
            password: '',
        };
    }

    handleChangeCompany = (company: string) => {
        this.setState({company});
    }

    handleChangeUsername = (username: string) => {
        this.setState({username});
    }

    handleChangePassword = (password: string) => {
        this.setState({password});
    }

  render() {
      const {company, username, password} = this.state;
    return (
        <Container>
            <LinearGradient colors={[primaryColor2, primaryColor5, primaryColor8]} style={{flex: 1}}>
                <View style={styles.iconWrapper} >
                    <Icon name="fa-tree" size={150} style={{color: primaryColor7}} />
                </View>
                <View style={styles.textInputWrapper} >
                    <Icon name="fa-building" style={{color: highlightSecondaryColor}} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.handleChangeCompany}
                        value={company}
                        placeholderTextColor={secondaryColor4}
                        placeholder="Company"
                />
                </View>
                <View style={styles.textInputWrapper} >
                    <Icon name="fa-user-o" style={{color: highlightSecondaryColor}} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.handleChangeUsername}
                        value={username}
                        placeholderTextColor={secondaryColor4}
                        placeholder="username"
                />
                </View>
                <View style={styles.textInputWrapper} >
                    <Icon name="fa-lock" style={{color: highlightSecondaryColor}} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.handleChangePassword}
                        value={password}
                        placeholderTextColor={secondaryColor4}
                        placeholder="password"
                    />
                </View>
            </LinearGradient>
        </Container>
    );
  }
}
