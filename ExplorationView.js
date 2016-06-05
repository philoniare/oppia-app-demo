import NavigationBar from 'react-native-navbar'
import React, { Component, } from 'react'
import { View, StyleSheet, Text, ListView, 
        TouchableHighlight,
        Image} from 'react-native'

class ExplorationView extends Component {
  _startExploration() {
    this.props.navigator.push({
      name: 'ExpPlayer',
      exp: this.props.exp,
    });
  }
  _goToLibrary() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View>
        <NavigationBar
          title={{ title:  this.props.exp.name , tintColor: 'black', }}
          leftButton={{ title: 'Library', tintColor: 'black', handler: this._goToLibrary.bind(this)}}
          rightButton={{ title: 'Start', tintColor: 'black', handler: this._startExploration.bind(this)}}
          style={{ backgroundColor: "rgba(1,185,166,1)", }}
          statusBar={{ tintColor: "rgba(0,150,136,1)", }}
        />
        <Image 
          source={{uri: this.props.exp.thumbnail}}
          style={styles.main_image}
          resizeMode={Image.resizeMode.stretch}
        />
        <View style={styles.main_section}>
          <View style={styles.exp_details}>
              <Text>Views: {this.props.exp.views}</Text>
              <Text>Contributors: {this.props.exp.contributors}</Text>
          </View>
          <View style={styles.exp_description}>
            <Text>{this.props.exp.description}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  exp_description: {
    marginTop: 20,
    padding: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  exp_details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'blue',
    borderWidth: 1,
  },
  main_section: {
    flex: 1,
    padding: 30,
  },
  main_image: {
    width: 400,
    height: 200,
  },
})

export default ExplorationView;