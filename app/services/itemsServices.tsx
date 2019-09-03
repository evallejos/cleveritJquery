import { Assets } from "react-navigation-stack";

export const getItems = () => {
  const items = ["jQuery", "Jake Weaary", "Vue.js", "Knockout"];
  return new Promise((resolve, reject) => {
    resolve(items);
  });
};
