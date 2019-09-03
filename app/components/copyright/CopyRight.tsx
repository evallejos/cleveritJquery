import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./styleCopyright";

export default class CopyRight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Copyright Cleverit</Text>
      </View>
    );
  }
}
