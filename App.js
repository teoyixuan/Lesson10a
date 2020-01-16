import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Picker,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

class addExpenseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amount: 0, description: '', cat: ''};
  }
  static navigationOptions = {
    title: 'Add an Expense',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#7B858A',
      fontSize: 24,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.labelText, {color: '#38464F', flex: 2}]}>
            Amount
          </Text>
          <TextInput
            onChangeText={text => this.setState({amount: text})}
            style={styles.input}
          />
        </View>
        <View>
          <Text
            style={[styles.labelText, {color: '#38464F', marginVertical: 20}]}>
            Description
          </Text>
          <TextInput
            onChangeText={text => this.setState({description: text})}
            style={[styles.input, {width: '100%'}]}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.labelText}>Category: </Text>
            <Text style={{fontSize: 18}}>{this.state.cat}</Text>
          </View>
          <Picker
            selectedValue={this.state.cat}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({cat: itemValue})
            }>
            <Picker.Item label="Entertainment" value="entertainment" />
            <Picker.Item label="hi" value="hi" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={[styles.button, {borderRadius: 15}]}
            onPress={() => {
              this.props.navigation.navigate('ViewExpense', {
                amount: this.state.amount,
                desc: this.state.description,
                cat: this.state.cat,
              });
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./src/images/expense.png')}
                style={[styles.button, {borderRadius: 25, height: 30}]}
              />
              <Text style={[styles.labelText, {backgroundColor: '#86B2CA'}]}>
                Save Expenses
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, {borderRadius: 25}]}
            onPress={() => {
              Alert.alert('Tip: Track your spending!');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./src/images/icon.png')}
                style={[styles.button, {borderRadius: 25, height: 30}]}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class viewExpenseScreen extends React.Component {
  static navigationOptions = {
    title: 'View Expense',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#7B858A',
      fontSize: 24,
    },
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
        <Text
          style={[styles.labelText, {color: '#38464F', marginVertical: 20}]}>
          Amount: {this.props.navigation.getParam('amount', 'NO-VALUE')}
        </Text>
        <Text style={[styles.labelText, {color: '#38464F', marginTop: 10}]}>
          Description:
        </Text>
        <Text style={[styles.labelText, {color: '#38464F', marginBottom: 10}]}>
          {this.props.navigation.getParam('desc', 'NO-VALUE')}
        </Text>
        <Text style={styles.labelText}>
          Category: {this.props.navigation.getParam('cat', 'NO-VALUE')}
        </Text>
      </View>
    );
  }
}

const mainNavigation = createStackNavigator({
  AddExpense: {screen: addExpenseScreen},
  ViewExpense: {screen: viewExpenseScreen},
});

const App = createAppContainer(mainNavigation);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 10},
  labelText: {
    textAlignVertical: 'center',
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#86B2CA',
    borderWidth: 2,
    borderRadius: 15,
    width: 250,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#86B2CA',
    padding: 15,
    alignItems: 'center',
    height: 50,
  },
});

export default App;
