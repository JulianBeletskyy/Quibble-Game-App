import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Container, Button, Teams } from '../components'

class Game extends Component {
    componentDidMount() {
        if ( ! this.props.game.id) {
            this.props.gameCreate()
        }
    }

    render() {
        const { hash } = this.props.game
        return (
            <Container.WithBackground>
                <Container.Game
                    title="Команды">
                    <Teams />

                    <Button.Primary
                        text="Дальше" />
                </Container.Game>
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
)(Game)