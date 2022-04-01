import { PixelRatio, Dimensions } from 'react-native'; 
const { 
  width: SCREEN_WIDTH, 
  height: SCREEN_HEIGHT 
  } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size: number, based = 'height') {
 const newSize = (based === 'height') ? 
                 size * heightBaseScale : size * widthBaseScale;
 return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export default normalize