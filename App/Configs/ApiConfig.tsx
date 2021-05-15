import Config from "react-native-config";

export default {
    baseURL: Config.BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    timeOut: 30000,
    merchantId: "608930d2328f512a64229164",
  };
  