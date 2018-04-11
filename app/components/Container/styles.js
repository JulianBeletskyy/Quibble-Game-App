import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.create({
    $loaderColor: '$white',
    $loaderBackColor: '$loaderBack',
    container: {
        flex: 1,
        backgroundColor: '$black',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        width: '80%',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    logo: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    form: {
        flex: 10,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    poweredBy: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    poweredByText: {
        color: '$lightGray'
    },
    back: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
    },
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 30,
        alignItems: 'flex-start',
    }
})