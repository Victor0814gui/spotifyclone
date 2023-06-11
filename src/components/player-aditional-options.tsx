import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Icon } from '../assets';

export function PlayerAdictionalOptions() {
  return (
    <View style={[styles.container]}>
      <Icon style={styles.spacemente} name={require('../assets/mic.svg')} />
      <Icon style={styles.spacemente} name={require('../assets/queue.svg')} />
      <Icon style={styles.spacemente} name={require('../assets/device.svg')} />
      <Icon
        style={styles.spacemente}
        name={require('../assets/volume-max.svg')}
      />
      <View style={styles.seekbar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: "100%",
    maxWidth: 300,
    // backgroundColor: "red",
  },
  spacemente: {
    marginRight: 10,
  },
  seekbar: {
    width: 100,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    marginHorizontal: 7,
  },
});
