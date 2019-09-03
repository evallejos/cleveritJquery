import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import StartScreen from "./app/pages/startGame/StartGame";
import JqueryScreen from "./app/pages/jquery/Jquery";
import GameOverScreen from "./app/pages/gameOver/GameOver";
import SplashScreen from "./app/pages/splash/splashApp";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Start: {
      screen: StartScreen
    },
    Jquery: {
      screen: JqueryScreen
    },
    Splash: {
      screen: SplashScreen
    },
    GameOver: {
      screen: GameOverScreen
    }
  },
  {
    initialRouteName: "Splash"
  }
);

const AppContainer = createAppContainer(AppNavigator);
