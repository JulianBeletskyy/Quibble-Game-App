import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { DAButton } from 'app/components/'

export default class Teams extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Teams</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'yellow',
    },
})
