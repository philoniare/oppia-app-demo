import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, Navigator,
  View
} from 'react-native';
import Library from './Library';
import ExplorationView from './ExplorationView';

class Oppia extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{
              name: 'Home',
          }}
          renderScene={(route, navigator) => {
            if(route.name === 'Home') {
              return <Library navigator={navigator} />
            } else if(route.name === 'ExpView') {
              return <ExplorationView navigator={navigator} exp={route.exp} />
            }
          }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Oppia', () => Oppia);
