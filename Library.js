import React, { Component, } from 'react'
import { View, StyleSheet, Text, ListView, 
        TouchableHighlight, Navigator,
        Image} from 'react-native'
import NavigationBar from 'react-native-navbar'

class Library extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var EXPLORATIONS = [{
      name: "Exploration 1",
      thumbnail: "https://www.oppia.org/images/general/no_explorations_found.png",
      views: "605",
      contributors: 4,
      description: "Sample Description",
    }, {
      name: "Exploration 2",
      thumbnail: "https://www.oppia.org/images/general/no_explorations_found.png",
      views: "1k",
      contributors: 2,
      description: "Sample Description",
    }, {
      name: "Exploration 3",
      thumbnail: "https://www.oppia.org/images/general/no_explorations_found.png",
      views: "2k",
      contributors: 7,
      description: "Sample Description",
    }, {
      name: "Exploration 4",
      thumbnail: "https://www.oppia.org/images/general/no_explorations_found.png",
      views: "300",
      contributors: 1,
      description: "Sample Description",
    }];
    this.state = {
      dataSource: ds.cloneWithRows(EXPLORATIONS)
    }
  }
  
  _search(exp) {
    console.log("Search clicked");
  }
  
  _pressRow(exp) {
    this.props.navigator.push({
      name: 'ExpView',
      exp: exp,
    });
  }
  
  _renderRow(exp) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(exp)}>
        <View style={styles.exp_item}>
          <View style={styles.exp_main}>
            <View style={styles.exp_preview}>
              <Image
                style={styles.exp_thumbnail}
                source={{uri: exp.thumbnail}}
              />
              <Text style={styles.exp_name}>{exp.name}</Text>
            </View>
            <Text style={styles.exp_description}>{exp.description}</Text>
          </View>
          <View style={styles.exp_details}>
            <Text>Views: {exp.views}</Text>
            <Text>Contributors: {exp.contributors}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Oppia Library', tintColor: 'black', }}
          rightButton={{ title: 'Search', tintColor: 'black',}}
          style={{ backgroundColor: "rgba(1,185,166,1)", }}
          statusBar={{ tintColor: "rgba(0,150,136,1)", }}
          />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  exp_main: {
    flex: 1,
  },
  exp_preview: {
    flexDirection: 'row',
    flex: 1,
  },
  exp_details: {
    height: 50,
    justifyContent: 'space-around',
    width: 100,
  },
  exp_name: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 20,
  },
  exp_thumbnail: {
    width: 50,
    height: 50,
  },
  exp_item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: 'rgba(1,160,192,214)',
    flex: 1,
  }
});

export default Library