import React, { useEffect, useRef } from "react";
import { Alert } from "react-native";
// import ImagePicker from "react-native-image-crop-picker";
// import NumberFormat from "react-number-format";
// import { BBText } from "../Components/BBText";

export const isUrl = (string: string) => {
  const regex = /^((http|https|ftp):\/\/)/;
  return regex.test(string);
};

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const scrollToTop = (scrollRef: any) => {
  scrollRef?.current?.scrollTo({
    y: 0,
    animated: true,
  });
};

export const showAlert = (message: string, onClick?: any) => {
  Alert.alert("Tin nhắn", message, [
    {
      text: "OK",
      onPress: onClick,
    },
  ]);
};

// export const handleImagePicker = (config) => {
//   return ImagePicker.openPicker({
//     width: config.width,
//     height: config.height,
//     cropping: true,
//     compressImageMaxWidth: config.width,
//     compressImageMaxHeight: config.height,
//     compressImageQuality: 1,
//     forceJpg: true,
//   });
// };

// export function FormatMoney({ value, numberStyle }) {
//   return (
//     <NumberFormat
//       value={value}
//       displayType={"text"}
//       suffix={" đ"}
//       thousandSeparator={true}
//       renderText={(formattedValue) => (
//         <BBText style={numberStyle} text={formattedValue} />
//       )}
//     />
//   );
// }
