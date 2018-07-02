import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
    $emptyAvatar: '$gray',
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    color: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    text: {
        color: '$white',
        fontSize: 20,
    },
    remove: {
        position: 'absolute',
        right: 0,
    },
    separator: {
        height: 10,
        backgroundColor: "$gray",
    },
    avatar: {
        marginRight: 10,
    }
})

export default styles