import React, { Component } from "react";
import { View, Image } from "react-native";
import CopyRight from "../../components/copyright/CopyRight";

export default class Splash extends Component {
  img: string =
    "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png";

  componentDidMount() {
    setTimeout(_ => {
      const _score = this.props.navigation.getParam("score");
      // const parseScore = JSON.stringify(_score);
      this.props.navigation.replace("Start", {
        score: _score
      });
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Image source={{ uri: this.img }} style={{ width: 200, height: 200 }} />
        <CopyRight></CopyRight>
      </View>
    );
  }
}
