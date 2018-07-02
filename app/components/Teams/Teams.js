import React, { Component } from 'react'
import { View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import Item from './Item'
import Player from './Player'

import styles from './styles'

class Teams extends Component {
    printTeam = (team) => {
        return <Item team={team} />
    }

    printPlayer = (item, index, section) => {
        return (
            <Player
                key={item.id}
                player={item} />
        )
    }

    printSeparator = () => {
        return <View style={styles.separator} />
    }

    render() {
        const { teams } = this.props.game
        let sections = []
        if (teams) {
            sections = [...teams, ...teams].map(item => {
                item.data = item.players
                return item
            })
        }

        return (
            <View
                style={styles.container}>
                <SectionList
                    sections={sections}
                    SectionSeparatorComponent={this.printSeparator}
                    renderSectionHeader={({ section }) => this.printTeam(section)}
                    renderItem={({ item, index, section }) => this.printPlayer(item, index, section)}
                    keyExtractor={(item, index) => item + index} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: {
            teams: state.game.teams,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams)