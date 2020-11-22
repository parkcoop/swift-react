/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  requireNativeComponent,
} from 'react-native';

const CounterView = requireNativeComponent('CounterView');

export default class App extends Component {
  state = {
    count: 1,
  };
  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  update = (e) => {
    this.setState({
      count: e.nativeEvent.count,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.wrapper, styles.border]}
          onPress={this.increment}>
          <Text style={styles.button}>{this.state.count}</Text>
        </TouchableOpacity>
        <CounterView count={1} style={styles.wrapper} onUpdate={this.update} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  button: {
    fontSize: 50,
    color: 'orange',
  },
});
