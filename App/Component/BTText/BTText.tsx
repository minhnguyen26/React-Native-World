import React from "react";
import {StyleProp,Text,TextStyle} from "react-native"

import styles from "./styles/BTTextStyle"

export interface Props{
  text:String;
  style?: StyleProp<TextStyle>
  color?: any;
  size?: any; 
  align?: any;
  numberOfLines?:any; 
}

const BTText: React.FC<Props> = (props) =>{
  var textStyle = [styles.defaultText, props.style];
  if (props.color) {
    textStyle.push({ color: props.color });
  }
  if (props.size) {
    textStyle.push({ fontSize: props.size });
  }
  if (props.align) {
    textStyle.push({ alignSelf: props.align });
  }
  return (
    <Text style ={textStyle}>
      {props.text ?? ""}
    </Text>

  )

}
export default BTText;
