import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from './config/routes'
import EStyleSheet from 'react-native-extended-stylesheet'
import { AlertProvider } from './components/Alert'
import actions from './actions'
import store from './config/store'

EStyleSheet.build({
    $primary: "#f42f41",
    $white: '#fff',
    $black: '#000',
    $gray: '#555',
    $lightGray: '#999',
    $loaderBack: 'rgba(0, 0, 0, 0.5)',

    //$outline: 1,
})

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider>
                    <Navigator onNavigationStateChange={(prevState, nextState) => {
                        const screen = nextState.routes[nextState.routes.length - 1].routeName
                        store.dispatch(actions.currentScreen(screen))
                    }} />
                </AlertProvider>
            </Provider>
        )
    }
}

export default App