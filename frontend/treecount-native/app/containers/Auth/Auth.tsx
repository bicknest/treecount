import * as React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useQuery} from '@apollo/react-hooks';

import Icon from '../../components/icons/Icon';
import TreeLogo from '../../components/icons/TreeLogo';
import LargeText from '../../components/core/LargeText';
import {
    primaryColor2,
    primaryColor3,
    primaryColor5,
    primaryColor7,
    primaryColor8,
    primaryColor9,
    highlightSecondaryColor,
    secondaryColor0,
    secondaryColor1,
    secondaryColor2,
    secondaryColor3,
    secondaryColor5,
    secondaryColor10,
    secondaryColor4,
    secondaryColor8,
} from '../../styles/colors';
import {contentMargin} from '../../styles/spacing';
import {GET_ALL_USERS} from './query';

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
    logoWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: contentMargin * 2,
    },
    textInputWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: contentMargin * 3,
        marginHorizontal: contentMargin * 3,
    },
    textInput: {
        flex: 1,
        borderBottomColor: secondaryColor3,
        borderBottomWidth: 1,
        fontSize: 20,
        marginLeft: contentMargin,
        marginRight: contentMargin * 3,
        color: secondaryColor8,
    },
});

function GetUsers() {
    const { loading, error, data } = useQuery(GET_ALL_USERS);
    if (loading) {
        console.log('loading');
        return null;
    }
    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);
    return <LargeText> Got Users </LargeText>;
};
    

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
            <LinearGradient colors={[secondaryColor3, secondaryColor5, secondaryColor8]} style={{flex: 1}}>
                <View style={styles.logoWrapper} >
                    <TreeLogo style={{width: 200, height: 500}} source="blah"/>
                </View>
                <View style={styles.textInputWrapper} >
                    <Icon name="fa-building" style={{color: secondaryColor3}} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.handleChangeCompany}
                        value={company}
                        placeholderTextColor={secondaryColor3}
                        placeholder="Company"
                />
                </View>
                <View style={styles.textInputWrapper} >
                    <Icon name="fa-user-o" style={{color: secondaryColor3}} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.handleChangeUsername}
                        value={username}
                        placeholderTextColor={secondaryColor3}
                        placeholder="username"
                />
                </View>
                <View style={[styles.textInputWrapper, {marginBottom: contentMargin * 4}]} >
                    <Icon name="fa-lock" style={{color: secondaryColor3}} />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.handleChangePassword}
                        value={password}
                        placeholderTextColor={secondaryColor3}
                        placeholder="password"
                    />
                </View>
                <GetUsers />
            </LinearGradient>
        </Container>
    );
  }
}
