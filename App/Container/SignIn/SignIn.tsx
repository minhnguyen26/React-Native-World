import React, { Component,useState,useEffect,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { validateEmail } from "../../Utils/Validates";
import UserActions from "../../Redux/UserRedux"
import styles from "./Styles/SigInStyle"
import {
  BTTextField,
  BTBackHeader,
  BTText,
  BTIconTextButton
} from "../../Component"
import { usePrevious, showAlert } from "../../Functions/AppFuntions";

import Images from "../../Themes/Images"

function doantonghop (){
  
  const dispatch=useDispatch();
  const userState = useSelector((state: any) => state.user);
  const passwordInputRef = useRef<any>(null);

  const isFetchingSignIn = userState?.fetchingSignIn;
  const prevIsFetchingSignIn = usePrevious(isFetchingSignIn);
  const signInError = userState?.signInError;

  const [errorMessage,setErrorMessage] = useState<string>("still empty");
  const [emailError, setEmailError] = useState<string>(null);
  const [passwordError, setPasswordError] = useState<string>(null);

  const [password,setPassword] = useState<string>("");

  const [isBadData,setIsBadData] =useState<boolean>(true)
  const [email,setEmail] =useState<string>("");
  const [pressLogin, setPressLogin] = useState<boolean>(false);

useEffect(() => {
    if (prevIsFetchingSignIn && !isFetchingSignIn) {
      if (!signInError) {
        dispatch(UserActions.getUserProfileRequest());
      } else {
        if (signInError === "Invalid email or password.") {
          setErrorMessage(`emailAndPasswordInvalid`);
          setPasswordError(`emailAndPasswordInvalid`);
          showAlert(`emailAndPasswordInvalid`);
        } else if (signInError === "TIMEOUT_ERROR") {
          setErrorMessage(`Mất kết nối với máy chủ`);
          setPasswordError(`Mất kết nối với máy chủ`);
          showAlert(`Mất kết nối với máy chủ \n Vui lòng thử lại sau!`);
        } else {
          showAlert(`loginFailed`);
          setErrorMessage(signInError);
        }
        setIsBadData(true);
        setErrorMessage(signInError);
      }
    }
  }, [isFetchingSignIn]);

  useEffect(() => {
    if (!isBadData && isEmpty(errorMessage)) {
      const userLoginData: any = {
        email: email.toLowerCase(),
        password: password,
      };
      dispatch(UserActions.signInEmailRequest(userLoginData));
      setPressLogin(true);
    }
  }, [isBadData, errorMessage]);

  const onEmailChangeText =(text: string)=>{
    setEmail(text);
    setIsBadData(false);
  }
  const onPasswordChangeText =(text: string)=>{
    setPassword(text);
    setIsBadData(false);
  }
  useEffect(() => {
    if(isEmpty(emailError) && isEmpty(passwordError)){
      if(!isBadData){
        setErrorMessage("");
      }
    }
  }, [emailError,passwordError,errorMessage]);
  const validatData=()=>{
    if(isEmpty(email) || !validateEmail(email))
    {
      setErrorMessage("email khong dung");
      setEmailError("Email khong dung");
      setIsBadData(true);
    }else{
      setEmailError("");
    }
    if (isEmpty(password) || password.length < 8) {
      setErrorMessage("Mat khau khong dung");
      setPasswordError("Mat Khau khong dung");
      setIsBadData(true);
    } else {
      setPasswordError("");
    }
  }
  const onSignInPress= ()=>{
    setIsBadData(false);
    Keyboard.dismiss();
    validatData();
  }
  const renderLoading = () => {
    return isFetchingSignIn;
  };
  return(
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "android" && -500}
      style={styles.container}
      behavior="padding"
      enabled
    >
      <ScrollView
        overScrollMode={"never"}
        style={styles.container}    
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={styles.container}>
          <BTBackHeader
            headerStyle={styles.iconStyle}
            leftIconSource={Images.iconBack}
          />
          <View style={styles.contentView}>
            <BTText
              text={"Đăng Nhập"}
              style={styles.title}
            /> 
            <BTText
              text={"Welcome to BookStore ITHub"}
              size={16}
              style={styles.content}
            />
            <BTTextField
              placeHolder={("Nhập Email")}
              textInputStyle={styles.txtTitleStyle}
              textInputContainerStyle={styles.boderstyle}
              onChangeText={(text: string)=> onEmailChangeText(text)}
              isPassword={false}
              autoFocus={true}
              blurOnsubmit={false}
              onSubmitEditingText={() => passwordInputRef?.current?.focus()}
              />
              {isBadData && !isEmpty(emailError) &&(
                <BTText text={emailError} />
              )}
              <BTTextField
                placeHolder={("Nhập mật khẩu")}
                textInputStyle={styles.txtTitleStyle}
                textInputContainerStyle={styles.boderstyle}
                onChangeText={(text: string)=> onPasswordChangeText(text)}
                isPassword={true}
                blurOnsubmit={false}
                customRef={passwordInputRef}
                onSubmitEditingText={onSignInPress}
              />
                {isBadData && !isEmpty(passwordError) &&(
                <BTText text={passwordError} />
              )}
                {/* <TouchableOpacity style={styles.btnNext} onPress={submitForm}>
                    <Text style={{color:"white",borderRadius:5}}>Register</Text>
                </TouchableOpacity> */}
                <BTIconTextButton
                  buttonTitle={"Đăng Nhập"}
                  onPressButton={onSignInPress}
                  buttonStyle={styles.styleButton}
                />
              </View>
            </SafeAreaView>
            </ScrollView>
            {renderLoading()}
        </KeyboardAvoidingView>
 
     )
};

export default doantonghop;