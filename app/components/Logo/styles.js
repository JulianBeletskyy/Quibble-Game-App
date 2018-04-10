import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const LOGO_WIDTH = Dimensions.get('window').width * 0.8
const LOGO_HEIGHT = LOGO_WIDTH / 2.617

export default EStyleSheet.create({
    $logoWidth: LOGO_WIDTH,
    $logoHeight: LOGO_HEIGHT,
    $logoSmallWidth: LOGO_WIDTH / 2,
    $logoSmallHeight: LOGO_HEIGHT / 2,
    logo: {
        width: '$logoWidth',
        height: '$logoHeight',
    },
})