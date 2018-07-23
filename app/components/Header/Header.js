import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Logo, Button } from '../../components'
import styles from './styles'

export default class Header extends Component {

    goBack = () => {
        this.props.navigation.goBack()
    }

    goToCreate = () => {
        this.props.navigation.navigate('CreateTeam')
    }

    isButton = () => {
        switch(this.props.scene.route.routeName) {
            case 'Game':
                return true
            case 'CreateTeam':
                return false
            default: return false
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.logoSmall}>
                    {
                        this.isButton()
                        ?   <Button.Small
                                onPress={this.goToCreate}
                                text="Новая команда" />
                        :   <Button.Icon
                                icon='arrow-back'
                                onPress={this.goBack} />
                    }
                    <Logo.Small />
                </View>
            </View>
        )
    }
}