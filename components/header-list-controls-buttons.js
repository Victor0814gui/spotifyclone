import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  PlatformColor,
} from 'react-native';
import {Icon} from '../assets';

export function HeaderControlsListButtons() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.playButton}>
        <Icon name={require('../assets/play-black-large.svg')} />
      </Pressable>
      <View style={styles.button}>
        <Icon name={require('../assets/heart-large.svg')} />
      </View>
      <View style={styles.button}>
        <Icon name={require('../assets/more-large.svg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 61,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    height: 57,
    width: 57,
    backgroundColor: '#1ed760',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 21,
  },
  button: {
    marginHorizontal: 12,
  },
});
