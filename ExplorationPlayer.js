import NavigationBar from 'react-native-navbar'
import React, { Component, } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ExplorationItem from './ExplorationItem'

class ExplorationPlayer extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  getSteps() {
    var steps = [{
      content: "Let’s talk first about something which you may think has nothing to do with waves: repeating patterns! How comfortable are you with identifying patterns?",
      type: "picker",
      choices: ["Very comfortable", "Somewhat comfortable", "Not comfortable"],
      responses: {
        "Very comfortable": "I see that you feel pretty comfortable with the subject matter", 
        "Somewhat comfortable": "No worries, we'll build up on your previous knowledge", 
        "Not comfortable": "Feeling not comfortable? Let's start with the basics.",
      }
    }, {
      content: "Let's review. Please write down something you have learned in this exploration. ",
      type: "text",
      response: "Wow, you have learned quite a lot!"
    }];
    return steps;
  }
  constructor(props) {
    super(props)
    this.state = {
      stepCounter: 0,
    }
  }
  
  _nextStep() {
    if(this.getSteps().length - 1 == this.state.stepCounter) {
      this.props.navigator.push({
          name: 'ExpFinish',
          exp: this.props.exp,
      });
    } else {
      this.setState({stepCounter: this.state.stepCounter+1});
    }
  }

  render() {

    return (
      <View>
        <NavigationBar
          title={{ title:  this.props.exp.name , tintColor: 'black', }}
          rightButton={{ title:  'Next' , tintColor: 'black', handler: this._nextStep.bind(this)}}
          style={{ backgroundColor: "rgba(1,185,166,1)", }}
          statusBar={{ tintColor: "rgba(0,150,136,1)", }}
        />
        <View style={styles.main_content}>
          <ExplorationItem step={this.getSteps()[this.state.stepCounter]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_content: {
    padding: 50,
  }
})
export default ExplorationPlayer