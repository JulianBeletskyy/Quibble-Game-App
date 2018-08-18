import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Container, Input } from '../components'
import { Keyboard } from 'react-native'

class CreateTeam extends Component {

    constructor(props) {
        super(props)
        props.teamCreate({game_id: props.game.id})
        this.data = {
            team_name: '',
        }

        this.inputs = {
            team_name: null,
        }
    }

    handleText = (value, key) => {
        this.data[key] = value
    }

    hideKeyboard = () => {
        
        Keyboard.dismiss()
    }

    render() {
        const { name } = this.props.game.team_editing
        return (
            <Container.WithBackground>
                <Input
                    icon='people'
                    placeholder='Название команды'
                    inputRef={input => { this.inputs.team_name = input }}
                    onSubmit={this.hideKeyboard}
                    value={name}
                    onChangeText={value => this.handleText(value, 'team_name')} />
            </Container.WithBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTeam)