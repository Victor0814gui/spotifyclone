import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  PlatformColor,
} from 'react-native';
import {Flyout} from 'react-native-windows';

import LinearGradient from 'react-native-linear-gradient';
import {MusicPlaylistItem} from './components/music-playlist-item';
import {HeaderControlsListButtons} from './components/header-list-controls-buttons';

const playlist = new Array(22).fill({
  name: 'jotaaro',
  astist: 'System of A down',
  reproductions: '234.234.123',
  time: '1.24m',
});

export function PlayListDetails() {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#b62c33', '#121212']}
        angle={180}
        start={{x: 0, y: 0}}
        end={{x: 0.1, y: 0.9}}
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
      />
      <View style={styles.container}>
        <View style={styles.playlistCotentDetails}>
          <Image
            source={{
              uri: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
            }}
            style={styles.playlistThumbnail}
          />
          <View
            style={{paddingHorizontal: 21, justifyContent: 'space-between'}}>
            <Text style={styles.contentType}>Álbum</Text>
            <Text style={styles.playlistName}>Mezmeire</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71',
                }}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 15,
                  marginRight: 8,
                }}
              />
              <Text>System of A down</Text>
              <View style={styles.circularSeparator} />
              <Text>2005</Text>
              <View style={styles.circularSeparator} />
              <Text>11 musicas</Text>
              <View style={styles.circularSeparator} />
              <Text>36mins 11s</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentBackgroundOpacity} />
          <HeaderControlsListButtons />
          {playlist.map((e, index) => (
            <MusicPlaylistItem
              name={e.name}
              astist={e.astist}
              reproductions={e.reproductions}
              index={index + 1}
              time={e.time}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playlistCotentDetails: {
    flexDirection: 'row',
    marginTop: 51,
    padding: 21,
  },
  playlistThumbnail: {
    height: 232,
    width: 232,
  },
  contentType: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 21,
  },
  playlistName: {
    fontWeight: '700',
    fontSize: 100,
  },
  content: {
    flex: 1,
    position: 'relative',
    padding: 18,
  },
  contentBackgroundOpacity: {
    position: 'absolute',
    backgroundColor: '#121212',
    opacity: 0.4,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circularSeparator: {
    height: 4,
    width: 4,
    backgroundColor: '#999999',
    borderRadius: 2,
    marginHorizontal: 4,
  },
});
