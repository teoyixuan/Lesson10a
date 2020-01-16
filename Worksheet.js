import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Picker,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Worksheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', year: ''};
  }

  render() {
    const name = this.state.username;
    const message = 'Hi, ' + name;
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>Name: </Text>
          <TextInput
            onChangeText={text => this.setState({username: text})}
            style={[styles.textInput, {width: 300}]}
          />
        </View>
        <Picker
          selectedValue={this.state.year}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({year: itemValue})
          }>
          <Picker.Item label="Year 1" value="year 1" />
          <Picker.Item label="Year 2" value="year 2" />
          <Picker.Item label="Year 3" value="year 3" />
        </Picker>
        <Text>My name is {this.state.username}</Text>
        <Text>I am in {this.state.year}</Text>
        <TouchableHighlight onPress={() => Alert.alert('Alert', message)}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./src/images/tick.jpg')} />
            <Text style={{backgroundColor: 'skyblue'}}>Confirm</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Worksheet;
