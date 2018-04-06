import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import RootStack from 'app/stack/'
import { Background } from 'app/components/'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Background />

                <View style={styles.content}>
                    <RootStack />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
