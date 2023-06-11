import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { TrackControls } from './track-controls';
import { PlayerAdictionalOptions } from './player-aditional-options';

import TrackPlayer, { TrackPlayerEvents, STATE_PAUSED, STATE_PLAYING, CAPABILITY_PLAY, CAPABILITY_PAUSE, useTrackPlayerEvents } from "react-native-track-player";

const events = [
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_STATE,
];


export function PlayerControls() {
  const { width } = useWindowDimensions();
  const [trackObject, setTrackObject] = useState<TrackPlayer.Track>({} as TrackPlayer.Track)

  const [trackArtist, setTrackArtist] = useState('');
  const [trackTitle, setTrackTitle] = useState('');

  useEffect(() => {
    let mounted = true;



    // Set the initial track info:
    (async () => {
      let trackIndex = await TrackPlayer.getCurrentTrack();
      let trackObject = await TrackPlayer.getTrack(trackIndex);
      setTrackObject(trackObject);
      // const statePlayer = await TrackPlayer.getState();
      // const statePlayerControls = statePlayer.Playing === ""
      const trackId = await TrackPlayer.getCurrentTrack();
      if (!mounted || !trackId) {
        return;
      }

      const track = await TrackPlayer.getTrack(trackId);
      if (!mounted) {
        return;
      }

      setTrackArtist(track.artist);
      setTrackTitle(track.title);
    })();


    // Set the track info whenever the track changes:
    const listener = TrackPlayer.addEventListener(
      TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        if (!mounted) {
          return;
        }

        setTrackArtist(track.artist);
        setTrackTitle(track.title);
      },
    );
    return () => {
      mounted = false;
      listener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.musicDetailsContainer]}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: !!trackObject?.artwork ? trackObject.artwork : 'https://seed-mix-image.spotifycdn.com/v6/img/artist/711MCceyCBcFnzjGY4Q7Un/pt-BR/default',
          }}
        />
        <View style={styles.musicDetailsContent}>
          <Text style={styles.title}>{trackTitle || "Rose Petals"}</Text>
          <Text style={styles.substitle}>{trackArtist || "soft, Wishes and Dreams"}</Text>
        </View>
        <Image source={require('../assets/heart.svg')} />
      </View>
      <TrackControls />
      <PlayerAdictionalOptions />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    maxHeight: 90,
    flex: 1,
    backgroundColor: '#181818',
    borderTopWidth: 1,
    borderColor: '#222222',
    alignItems: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  musicDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  thumbnail: {
    height: 60,
    width: 60,
  },
  musicDetailsContent: {
    marginHorizontal: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#efefef',
  },
  substitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#8f8f8f',
  },
});
