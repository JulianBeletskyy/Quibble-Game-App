import { StackNavigator } from "react-navigation";
import { Home, Login, Register, Teams } from "../screens";

const StackOptions = {
    headerMode: "none",
    cardStyle: {
        backgroundColor: "transparent",
    }
}

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
    Teams: {
        screen: Teams
    },
},
{
    ...StackOptions,
    initialRouteName: "Home"
})