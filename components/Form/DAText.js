import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default class DAText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: (this.props.value || '')
        }
    }

    componentDidMount = () => {
        console.log(1123)
    }

    onChangeText = (value) => {
        this.setState({
            value
        })
    }

    render() {
        const { placeholder = '', style = {}, type = 'text', focus = false } = this.props
        const secureTextEntry = type == 'password'
        return (
            <TextInput
                style={[styles.text, style]}
                placeholder={placeholder}
                placeholderTextColor='#555'
                underlineColorAndroid='#555'
                inlineImageLeft='search_icon'
                inlineImagePadding={20}
                secureTextEntry={secureTextEntry}
                autoFocus={focus}
                blurOnSubmit={true}
                value={this.state.value}
                onChangeText={this.onChangeText} />
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
        height: 40,
        marginBottom: 10,
    },
});
