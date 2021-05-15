import React from "react";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  textInputContainer:{
    flexDirection:"row",
    borderWidth:2,
    borderRadius:6,
    justifyContent:"center",
    paddingHorizontal:8,
    marginTop: 8,
  },
  textInput:{
    height:48,
    flex:1,
  },
  iconPress:{
    justifyContent:"center",
  },
  icon:{
    height:40,
    width:40
  }

});