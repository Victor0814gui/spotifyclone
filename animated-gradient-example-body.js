/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  PlatformColor,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colorTop: '#00ff99',
      colorBottom: '#cccccc',
    };
  }

  incrementColor = (color, step) => {
    const intColor = parseInt(color.substr(1), 16);
    const newIntColor = (intColor + step).toString(16);
    return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`;
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        colorTop: this.incrementColor(this.state.colorTop, 1),
        colorBottom: this.incrementColor(this.state.colorBottom, -1),
      });
    }, 20);
  }

  render() {
    return (
      <Fragment>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}>
          <LinearGradient
            colors={[this.state.colorTop, this.state.colorBottom]}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
          <View style={{padding: 200}} />
          <View style={{padding: 200}} />
          <View style={{padding: 200}} />
          <View style={{padding: 200}} />
          <View style={{padding: 200}} />
          <View style={{padding: 200}} />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
