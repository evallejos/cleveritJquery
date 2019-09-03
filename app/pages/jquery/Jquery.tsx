import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import styles from "./styleJquery";
import { Icon } from "react-native-elements";
import { getItems } from "../../services/itemsServices";

export default class Jquery extends Component {
  count: number = 0;
  timeEnd: false;

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.serviceItems();
    setTimeout(_ => {
      this.timeEnd = true;
      if (this.count < 55 && this.timeEnd) {
        this.props.navigation.replace("GameOver", {
          score: this.count
        });
      }
    }, 3000);
  }

  touchSave(jquery: string) {
    console.log("jquery");
    if (jquery == "jQuery") {
      this.count++;
      console.log(this.count);
    }
    if (this.count > 55 && !this.timeEnd) {
      this.props.navigation.replace("Jquery");
      return;
    }

    this.shuffle();
    console.log("reorder >>");
  }

  serviceItems() {
    getItems().then(resp => {
      this.setState({
        items: resp
      });
    });
  }

  shuffle() {
    const array = this.state.items;
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({
      items: array
    });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Find it!</Text>
          <Text style={styles.title}>now</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
            flexWrap: "wrap"
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "powderblue",
              marginRight: 20
            }}
          >
            <View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={_ => {
                  this.touchSave(this.state.items[0]);
                }}
              >
                <Text style={styles.dinamicText}>{this.state.items[0]}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "skyblue",
              textAlign: "center"
            }}
          >
            <View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={_ => {
                  this.touchSave(this.state.items[1]);
                }}
              >
                <Text style={styles.dinamicText}>{this.state.items[1]}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "red",
              marginTop: 20,
              marginRight: 20
            }}
          >
            <View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={_ => {
                  this.touchSave(this.state.items[2]);
                }}
              >
                <Text style={styles.dinamicText}>{this.state.items[2]}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "green",
              marginTop: 20
            }}
          >
            <View style={{ marginTop: 50 }}>
              <TouchableOpacity
                onPress={_ => {
                  this.touchSave(this.state.items[3]);
                }}
              >
                <Text style={styles.dinamicText}>{this.state.items[3]}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 150,
              height: 150,
              marginTop: 150
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                name="history"
                type="font-awesome"
                size={50}
                color="black"
              />
              <Text style={{ marginLeft: 20, borderWidth: 1, padding: 10 }}>
                1:00
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
