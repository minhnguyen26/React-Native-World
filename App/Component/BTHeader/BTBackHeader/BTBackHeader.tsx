import React from "react"
import {View,Image, ViewStyle,StyleProp} from "react-native";

import Images from "../../../Themes/Images";

import {BTImage} from "../../BBImage"

import styles from "./Styles/BTBackHeader"

export interface Props{
    onBackPress?:() =>void;
    headerStyle?: StyleProp<ViewStyle>;
    leftIconSource?:any;
    leftIconStyle?:StyleProp<ViewStyle>;
}

const BTBackHeader: React.FC<Props> = (props) =>{
  return(
    <View style={[styles.headerBack, props.headerStyle]}>
      <BTImage
        source={props.leftIconSource}
        imageStyles={[styles.backIcon,props.leftIconStyle]}
      />
    </View>
  );
};
export default BTBackHeader;