import React from 'react'
import Navigator from './config/routes'
import EStyleSheet from 'react-native-extended-stylesheet'
import { AlertProvider } from './components/Alert'

EStyleSheet.build({
    $primary: "#f42f41",
    $white: '#fff',
    $black: '#000',
    $gray: '#555',
    $lightGray: '#999',

    //$outline: 1,
});

class App extends React.Component {
    render() {
        return (
            <AlertProvider>
                <Navigator />
            </AlertProvider>
        )
    }
}

export default App