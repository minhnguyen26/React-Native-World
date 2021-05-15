import React from "react";
import {Image,StyleProp,ImageStyle} from "react-native";
import FastImage from "react-native-fast-image";

import {isUrl} from "../../../Functions/AppFuntions"
export interface Props{
    source: any;
    imageStyles:StyleProp<ImageStyle> | any;

}

const BTImage: React.FC<Props> = ({source,imageStyles}) =>{
    return typeof source ==="string" && isUrl(source) ? (
        <FastImage source={{uri:source}} style={imageStyles}/>
    ) : (
      <Image
        source={typeof source ==="string" ? {url:source} : source}
        style={imageStyles}
      />  

    )

}

export default BTImage;