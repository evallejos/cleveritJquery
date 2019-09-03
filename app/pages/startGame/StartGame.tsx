import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import styles from "./styleStartGame";
import CopyRight from "../../components/copyright/CopyRight";
import { storeData, retrieveData } from "../../services/storage";

export default class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxScore: 0
    };
  }

  componentDidMount() {
    const score = this.props.navigation.getParam("score");
    if (score) {
      this.evalueMaxScore(score);
    }
  }

  async evalueMaxScore(score) {
    let _maxScore = await retrieveData();
    if (_maxScore != null && score) {
      if (score > _maxScore) {
        await storeData(score);
        this.setState({
          maxScore: score
        });
      } else {
        await storeData(score);
        this.setState({
          maxScore: _maxScore
        });
      }
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.fontTitle}>Jquery Finder</Text>
        <Button
          style={styles.playButton}
          onPress={_ => this.props.navigation.replace("Jquery")}
          icon={
            <Icon name="play" type="font-awesome" size={150} color="black" />
          }
          type="clear"
        />
        <View>
          <Text style={styles.fontScore}>Hi-Score</Text>
          <Text style={styles.fontScoreNumber}>{this.state.maxScore}</Text>
        </View>
        <CopyRight></CopyRight>
      </View>
    );
  }
}
