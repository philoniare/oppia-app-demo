import React, { Component, } from 'react'
import {
  View,
  Text,
  Picker,
  TextInput,
} from 'react-native'

class ExplorationItem extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      pickerValue: "Not comfortable",
      responseText: "",
    }
  }
  getResponsePrompt() {
    if (this.props.step.type === 'picker') {
      return (
        <View>
          <Picker 
            style={{
              width: 300,
            }}
            selectedValue={(this.state && this.state.pickerValue) || 'Not comfortable'}
            onValueChange={(value) => {
              this.setState({pickerValue: value})
            }}>
            {this.props.step.choices.map(function(choice, i){
              return <Picker.Item label={choice} value={choice} key={i} />;
            })}
          </Picker>
          <Text>{this.props.step.responses[this.state.pickerValue]}</Text>
        </View>
      );
    } else if (this.props.step.type === 'text') {
      return (
        <View>
          <TextInput
            style={{
              marginTop: 20, 
              height:  100 , 
              width:  300 ,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.5)",
            }}
            multiline={true}
            placeholder={ 'I have learned...'}
            placeholderTextColor={"rgba(198,198,204,1)"}
            onChangeText={(text) => {this.setState({text}); this.setState({responseText: this.props.step.response})}}
            value={(this.state && this.state.text) || ''}
          />
          <Text>{this.state.responseText}</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View>
        <Text>{this.props.step.content}</Text>
        {this.getResponsePrompt()}
      </View>
    )
  }
}

export default ExplorationItem