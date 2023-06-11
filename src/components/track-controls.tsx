import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import TrackPlayer, { STATE_PAUSED, STATE_BUFFERING, STATE_PLAYING, State, TrackPlayerEvents, usePlaybackState, useTrackPlayerEvents } from 'react-native-track-player';

import { Icon } from '../assets';
import { Seekbar } from './seekbar';

const events = [
  STATE_PAUSED.toString(),
  STATE_PLAYING.toString(),
]

export function TrackControls() {
  const { width } = useWindowDimensions();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBufering, setIsBufering] = useState(false);
  const playbackState = usePlaybackState();

  const onPause = async () => {
    setIsPlaying(false)
    await TrackPlayer.pause();
  };
  const onPlay = async () => {
    setIsPlaying(true)
    await TrackPlayer.play();

  };
  const onStop = async () => {
    await TrackPlayer.stop();
  };
  const onNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const onPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  useEffect(() => {
    const REMOTE_PAUSE_LISTENER = TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PAUSE, async () => {
      console.log('Event.RemotePause');
      await TrackPlayer.pause();
      setIsPlaying(false)
    });

    const REMOTE_PLAY_LISTENER = TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PLAY, async () => {
      console.log('Event.RemotePlay');
      await TrackPlayer.play();
      setIsPlaying(true)
    });

    return () => {
      REMOTE_PAUSE_LISTENER.remove();
      REMOTE_PLAY_LISTENER.remove();
    }
  }, [])


  useEffect(() => {
    const onTrackListen = async () => {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        setIsPlaying(false)
      } else if (playbackState === TrackPlayer.STATE_PLAYING) {
        setIsPlaying(true)
      } else if (playbackState === TrackPlayer.STATE_BUFFERING) {
        setIsBufering(true)
      } else {
        // setIsPlaying(false)
        setIsBufering(false)
      }
    }

    onTrackListen();
  }, [playbackState])

  return (
    <View
      style={[
        styles.container,
        {
          width: width / 3,
        },
      ]}>
      <View style={styles.buttonsContainer}>

        <Pressable onPress={onPause}>
          <Icon
            style={{ marginHorizontal: 12 }}
            name={require('../assets/shuffle-arrow.svg')}
          />
        </Pressable>
        <Pressable onPress={onPrevious}>
          <Icon
            style={{ marginHorizontal: 12 }}
            name={require('../assets/back-arrow.svg')}
          />
        </Pressable>
        <Pressable style={styles.playAndPauseButtonCircle} onPress={!isPlaying ? onPlay : onPause}>

          {
            !isPlaying ? <Icon
              style={{ marginHorizontal: 12 }}
              name={require("../assets/pause-black.svg")}
            />
              : <Icon
                style={{ marginHorizontal: 12 }}
                name={require('../assets/play-black.svg')}
              />
          }
        </Pressable>
        <Pressable onPress={onNext}>
          <Icon
            style={{ marginHorizontal: 12 }}
            name={require('../assets/next-arrow.svg')}
          />
        </Pressable>
        <Pressable onPress={onPrevious}>

          <Icon
            style={{ marginHorizontal: 12 }}
            name={require('../assets/repeat-arrow.svg')}
          />
        </Pressable>
      </View>
      <Seekbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'red',
    width: "100%",
    maxWidth: 500,
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
  playAndPauseButtonCircle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "center",
  }
});
