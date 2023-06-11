import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, PanResponder } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

export function Seekbar() {
  const { width } = useWindowDimensions();
  const initialState = {
    position: 0,
    bufferedPosition: 0,
    duration: 0,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    (async () => {
      const position = await TrackPlayer.getPosition();
      const bufferedPosition = await TrackPlayer.getBufferedPosition();
      const duration = await TrackPlayer.getDuration();

      setState({ position, bufferedPosition, duration });
    })();
  });

  const handleSeek = async (value: any) => {
    await TrackPlayer.seekTo(value);
    setState(prevState => ({
      ...prevState,
      position: value
    }));
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const progressWidth = width - 14;
      const newPosition = Math.max(0, Math.min(state.duration, (gestureState.moveX - 7) * (state.duration / progressWidth)));
      setState(prevState => ({
        ...prevState,
        position: newPosition
      }));
    },
    onPanResponderRelease: async () => {
      await handleSeek(state.position);
    },
  });

  return (
    <View style={styles.seekbarContainer}>
      <Text style={styles.seekbarText}>{convertDurationToTimeString(state.position) || "0:00"}</Text>
      <View style={styles.seekbar} {...panResponder.panHandlers}>
        <View style={[styles.seekbarProgress, { width: `${(state.position / state.duration) * 100}%` }]} />
      </View>
      <Text style={styles.seekbarText}>{convertDurationToTimeString(state.duration) || "3:20"}</Text>
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
  progress: {
    height: 4,
    borderRadius: 2,
    marginTop: 10,
    flexDirection: 'row',
    width: "100%",
    minWidth: 140,
    maxWidth: 300,
  },
  timestamp: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    width: "100%",
    maxWidth: 300,
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
