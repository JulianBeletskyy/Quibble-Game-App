import EStyleSheet from 'react-native-extended-stylesheet'

const INPUT_HEIGHT = 40

export default EStyleSheet.create({
    $placeholder: '$gray',
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '$placeholder',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 5,
    },
    icon: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        color: '$white',
        fontSize: 20,
        height: INPUT_HEIGHT,
        paddingHorizontal: 10,
    },
})