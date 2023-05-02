import React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {Icon} from '../assets';

export function PlayerAdictionalOptions() {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width / 3}]}>
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
    flex: 1,
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
