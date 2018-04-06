import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default class Logo extends React.Component {
    onPress = (e) => {
        console.log('To Home')
    }
    
    render() {
        return (
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
                resizeMode="contain" />
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
