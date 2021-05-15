import React,{useState} from "react";
import {
    TextInput,
    Text,
    View,
    TextStyle,
    StyleProp,
    ViewStyle,
    TouchableOpacity
} from "react-native";
import Images from "../../Themes/Images";
import styles from "./Styles/BTTextFieldStyles";
import BBImage from "../BBImage/BTImage/BBImage";

export interface Props {
  isPassword: boolean;
  placeHolder?: string;
  onChangeText: (text:string) =>void;
  value?: any;
  textInputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  customRef?:any;
  autoFocus?:boolean;
  onSubmitEditingText:()=>void;
  blurOnsubmit?: boolean;
  
}
const BTTextField: React.FC<Props> = (props) => {
  const [isShowPassword,setIsShowPassword]=useState<boolean>(
    props.isPassword
  );

  const changeShowPasswordState=()=>{
    setIsShowPassword(!isShowPassword);
  };
  const onChangeTextInput = (text: string) => {
    props.onChangeText(text);
  };

  return(
    <View style={[styles.container,props.containerStyle]}>
      <View style={[styles.textInputContainer,props.textInputContainerStyle]}>  
        <TextInput
          style={[styles.textInput,props.textInputStyle]}
          placeholder={props.placeHolder}
          onChangeText={(text)=>{onChangeTextInput(text);}}
          value={props.value}
          secureTextEntry={isShowPassword}
        />
        {props.isPassword &&
          <TouchableOpacity
            style ={styles.iconPress}
            onPress={changeShowPasswordState}
          >
            <BBImage
              source={
                !isShowPassword 
                  ? Images.iconShowPassword
                  : Images.iconHidePassword
              }
              imageStyles={styles.icon}
              />
          </TouchableOpacity>
        }
      </View>
    </View>
  );

};
export default BTTextField;