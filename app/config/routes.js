import React from "react"
import { StackNavigator } from "react-navigation"
import { Home, Login, Register, Game, CreateTeam } from "../screens"
import { Header } from "../components"

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
        header: props => <Header {...props} />,
    }
})

const CreateTeamNavigator = StackNavigator({
    CreateTeam: {
        screen: CreateTeam
    },
},
{
    ...StackOptions,
    headerMode: "screen",
    initialRouteName: "CreateTeam",
    navigationOptions: {
        header: props => <Header {...props} />,
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
    CreateTeam: {
        screen: CreateTeamNavigator
    },
},
{
    ...StackOptions,
    initialRouteName: "Home"
})