import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DAButton } from '../components';

export default class Home extends React.Component {
    onPress = (e) => {
        console.log(123)
    }

    render() {
        return (
            <View>
                <DAButton
                    text='Play'
                    onPress={this.onPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /* container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, */
});
