import NavigationBar from 'react-native-navbar'
import React, { Component, } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

class ExplorationFinish extends Component {
  _goToLibrary() {
    this.props.navigator.replace({
      name: 'Home',
    });
  }
  
  render() {
    return (
      <View>
        <NavigationBar
          title={{ title:  this.props.exp.name , tintColor: 'black', }}
          leftButton={{title: 'Library', tintColor: 'black', handler: this._goToLibrary.bind(this)}}
          style={{ backgroundColor: "rgba(1,185,166,1)", }}
          statusBar={{ tintColor: "rgba(0,150,136,1)", }}
        />
        <View style={styles.main_section}>
          <Text>Congratulations on learning about {this.props.exp.name}!</Text>
          <Text>Help Spread the Knowledge: </Text>
          <View style={styles.share_section}>
            <Image 
              style={styles.share_image}
              source={{uri: "https://www.facebookbrand.com/img/fb-art.jpg"}}
              />
            <Image 
              style={styles.share_image}
              source={{uri: "https://g.twimg.com/Twitter_logo_blue.png"}}
              />
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  share_image: {
    padding: 20,
    width: 50,
    height: 50,
  },
  main_section: {
    padding: 20,
    flex: 1,
  },
  share_section: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})
export default ExplorationFinish