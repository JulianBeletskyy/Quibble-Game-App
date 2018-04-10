import { StackNavigator, TabNavigator } from "react-navigation";
import { Start, Home, Login, Teams } from "../screens";

const StackOptions = {
    headerMode: "none",
    cardStyle: {
        backgroundColor: "transparent",
    }
};

export const PublicStack = TabNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    }
},
{
    initialRouteName: "Login",
    navigationOptions: {
        tabBarVisible: false,
        swipeEnabled: false,
    }
})

const GameStack = StackNavigator({
    Teams: {
        screen: Teams
    }
},
{
    ...StackOptions,
    initialRouteName: "Teams",
});

export default StackNavigator({
    Start: {
        screen: Start
    },
    Game: {
        screen: GameStack
    },
},
{
    ...StackOptions,
    initialRouteName: "Start"
})