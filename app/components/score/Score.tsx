import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styleScore";

export default class Score extends Component {
  constructor(props) {
    super(props);
    global.SCORE = 0;
  }

  componentDidMount() {}
  render() {
    return (
      <View>
        <Text style={styles.fontScore}>Hi-Score</Text>
        <Text style={styles.fontScoreNumber}>{global.SCORE}</Text>
      </View>
    );
  }
}
