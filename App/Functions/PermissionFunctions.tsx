import {
  PERMISSIONS,
  request,
  RESULTS,
  check,
  openSettings,
} from "react-native-permissions";
import { View, Alert, Text, Platform } from "react-native";

export function openAppSettings() {
  openSettings().catch(() => console.warn("Cannot open settings"));
}

/**
 * in android mainifrest using write and read extenal
 * but in react native just need to check sorage permission is enough
 * because storage include write extenal and read extenal in android.
 */
export const checkPhotoLibraryPermission = (callback) => {
  let libraryPermission =
    Platform.OS === "ios"
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

  check(libraryPermission)
    .then((result) => {
      const status = PERMISSIONS.IOS.PHOTO_LIBRARY;

      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            "This feature is not available (on this device / in this context)"
          );
          callback();
          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            "Yêu cầu quyền truy cập",
            "Vui lòng cập nhật quyền truy cập để sử dụng tính năng này !",
            [
              {
                text: "Huỷ",
                onPress: () => {},
              },
              {
                text: "Đồng ý",
                onPress: () => {
                  openAppSettings();
                },
              },
            ]
          );
          break;
        case RESULTS.DENIED:
          request(libraryPermission).then((result) => {
            if (result === RESULTS.GRANTED) {
              callback();
            }
          });
          break;
        case RESULTS.GRANTED:
          callback();
          break;
      }
    })
    .catch((error) => {
      console.log("Error on check library permission: ", error);
    });
};
