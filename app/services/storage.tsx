import { AsyncStorage } from "react-native";

export const storeData = async value => {
  try {
    return await AsyncStorage.setItem("MAX_SCORE", JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const retrieveData = async () => {
  try {
    return await AsyncStorage.getItem("MAX_SCORE");
  } catch (error) {
    console.log(error);
  }
};
