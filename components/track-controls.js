import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

import {Icon} from '../assets';

export function TrackControls() {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          width: width / 3,
        },
      ]}>
      <View style={styles.buttonsContainer}>
        <Icon
          style={{marginHorizontal: 12}}
          name={require('../assets/shuffle-arrow.svg')}
        />
        <Icon
          style={{marginHorizontal: 12}}
          name={require('../assets/back-arrow.svg')}
        />
        <Icon
          style={{marginHorizontal: 12}}
          name={require('../assets/play.svg')}
        />
        <Icon
          style={{marginHorizontal: 12}}
          name={require('../assets/next-arrow.svg')}
        />
        <Icon
          style={{marginHorizontal: 12}}
          name={require('../assets/repeat-arrow.svg')}
        />
      </View>
      <View style={styles.seekbarContainer}>
        <Text style={styles.seekbarText}>2:20</Text>
        <View style={styles.seekbar}>
          <View style={styles.seekbarProgress} />
        </View>

        <Text style={styles.seekbarText}>3:20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seekbarContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  seekbar: {
    width: '100%',
    height: 4,
    borderRadius: 2,
    backgroundColor: '#5e5e5e',
    marginHorizontal: 7,
    position: 'relative',
  },
  seekbarProgress: {
    position: 'absolute',
    width: '70%',
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
  seekbarText: {
    fontWeight: '500',
    fontSize: 11,
  },
});
