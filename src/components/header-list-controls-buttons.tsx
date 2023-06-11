import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  PlatformColor,
} from 'react-native';
import { Icon } from '../assets';

import TrackPlayer, { usePlaybackState, STATE_PAUSED, STATE_PLAYING, State, TrackPlayerEvents, useTrackPlayerEvents } from 'react-native-track-player';


export function HeaderControlsListButtons() {
  const [isPlaying, setIsPlaying] = useState(false);
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
      }
    }

    onTrackListen();
  }, [playbackState])


  return (
    <View style={styles.container}>
      <Pressable onPress={isPlaying ? onPause : onPlay} style={styles.playButton}>
        {isPlaying
          ? <Icon name={require('../assets/play-black-large.svg')} />
          : <Icon name={require('../assets/pause-black-large.svg')} />}
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
