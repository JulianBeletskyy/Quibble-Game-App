import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Logo, DAButton } from 'app/components/'
import { PublicStack } from 'app/stack/'

export default class Public extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Logo />
                    </View>

                    <View style={styles.form}>
                        <PublicStack screenProps={{ rootNavigation: this.props.navigation }} />
                    </View>

                    <View style={styles.poweredBy}>
                        <Text style={{ color: '#999' }}>Powered by Div-Art</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    container: {
        flex: 0.8,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    logo: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    form: {
        flex: 10,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    poweredBy: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
});
