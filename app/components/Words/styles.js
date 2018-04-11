import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10, 
        marginBottom: 20, 
    },
    line: {
        width: 50,
        height: 1,
        backgroundColor: '$lightGray',
        marginHorizontal: 10,
    },
    text: {
        color: '$lightGray',
        fontSize: 20,
    }
})