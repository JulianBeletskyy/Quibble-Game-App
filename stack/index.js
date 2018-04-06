import { StackNavigator, TabNavigator } from 'react-navigation';
import { Public, Home, Login, Teams } from 'app/containers/'

const StackOptions = {
    headerMode: 'none',
    mode: 'card',
    cardStyle: {
        backgroundColor: 'transparent',
    }
}

const PublicStack = TabNavigator({
    HomeScreen: {
        screen: Home,
    },
    LoginScreen: {
        screen: Login,
    },
},
{
    initialRouteName: 'HomeScreen',
    navigationOptions: {
        tabBarVisible: false,
        swipeEnabled: false,
    },
})

const GameStack = StackNavigator({
    TeamsScreen: {
        screen: Teams,
    },
},
{
    ...StackOptions,
    initialRouteName: 'TeamsScreen',
})

export default StackNavigator({
    StartScreen: {
        screen: Public,
    },
    GameScreen: {
        screen: GameStack,
    },
},
{
    ...StackOptions,
    initialRouteName: 'StartScreen',
})

export { PublicStack }