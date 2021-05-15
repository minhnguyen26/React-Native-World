import React from "react";
import {TouchableOpacity,Text,View, StyleProp, TextStyle, ViewStyle, ImageStyle} from "react-native";

import styles from "./Styles/BTIconTextButton"

import{
  BTImage,
  BTText} from "../../../Component"

export interface Props {
  onPressButton:() => void;
  buttonTitle: String;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  sourceIcon?: any;
  iconStyle?:StyleProp<ImageStyle>;  
}

const BTIconTextButton: React.FC <Props> =(props)=>{
  return(
    <TouchableOpacity
      style={[styles.container,props.buttonStyle]}
      onPress={props.onPressButton}
    >
      {props.sourceIcon &&(
        <BTImage
          source={props.sourceIcon}
          imageStyles={[styles.icon,props.iconStyle]}
        />
      )}
      <BTText
        style={[styles.titleStyle, props.titleStyle]}
        text={props.buttonTitle}
      />
    </TouchableOpacity>
  

  );
};
export default BTIconTextButton;