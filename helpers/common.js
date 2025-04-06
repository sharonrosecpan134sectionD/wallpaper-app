import { Dimensions } from "react-native";


const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

export const wp = percentage => {
    const width = deviceWidth;
    return (percentage*width)/100;
}

export const hp = percentage => {
    const height = deviceHeight;
    return (percentage*height)/100;
}

export const getColumnCount = () => {
    if (deviceHeight >= 1024){
        return 4; // desktop
    }else if (deviceWidth > 768){
        return 3; // tablet
    }else {
        return 2; // phone 
    }
}

export const getImageSize = (width, height) => {
    if (width>height){
        // landscape
        return 250;
    }else if(width<height){
        //portrait
        return 300;
    }else{
        //square 
        return 200;
    }

        

}