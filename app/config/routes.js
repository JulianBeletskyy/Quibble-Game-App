import React from "react"
import { StackNavigator } from "react-navigation"
import { Home, Login, Register, Game } from "../screens"
import { Logo } from "../components"

const StackOptions = {
    headerMode: "none",
    cardStyle: {
        backgroundColor: "transparent",
    }
}

const GameNavigator = StackNavigator({
    Game: {
        screen: Game
    },
},
{
    ...StackOptions,
    headerMode: "screen",
    initialRouteName: "Game",
    navigationOptions: {
        headerTitle: <Logo.Small />,
        titleStyle: {
            alignSelf: 'center',
        },
        headerTitleStyle: {
            textAlign: 'center',
        },
        headerStyle: {
            backgroundColor: '#111',
            justifyContent: 'center',
        }
    }
})

export default StackNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Game: {
        screen: GameNavigator
    },
},
{
    ...StackOptions,
    initialRouteName: "Home"
})