import React, { Component } from "react";
import { Text, View } from "react-native";
import CopyRight from "../../components/copyright/CopyRight";
import styles from "./styleGameOver";

export default class GameOver extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(_ => {
      const _score = this.props.navigation.getParam("score");
      this.props.navigation.replace("Splash", {
        score: _score
      });
    }, 6000);
  }

  loadScore() {}

  render() {
    const score = this.props.navigation.getParam("score");
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Game Over!</Text>
        <Text style={styles.subtitle}>Your</Text>
        <Text style={styles.score}>{JSON.stringify(score)}</Text>
        <Text style={styles.subtitle}>SCORE</Text>
        <CopyRight></CopyRight>
      </View>
    );
  }
}
