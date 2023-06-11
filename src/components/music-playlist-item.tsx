import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Flyout } from 'react-native-windows';
import { Icon } from '../assets';

type MusicPlaylistItemProps = {
  artwork: string;
  name: string;
  astist: string;
  reproductions: string;
  time: number;
  index: number;
  onPress?: () => void;
}

export function MusicPlaylistItem({ onPress = () => { }, artwork, time, name, astist, reproductions, index }: MusicPlaylistItemProps) {
  const [onHover, setOnHover] = useState(false);

  return (
    <Pressable onPress={onPress}>
      <View
        //@ts-ignore
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        style={[styles.container]}>
        {onHover && <View style={styles.containerBackgroundOpacity} />}
        <View style={styles.iconContainer}>
          {onHover ? (
            <Icon name={require('../assets/pause.svg')} />
          ) : (
            <Text style={styles.musicIndex}>{index}</Text>
          )}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.musicTitle}>{name}</Text>
          <Text style={styles.musicAuthor}>{astist}</Text>
        </View>
        <Text style={styles.reproductions}>{reproductions}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
    position: 'relative',
    padding: 6,
    borderRadius: 4,
  },
  containerBackgroundOpacity: {
    backgroundColor: '#2b2a2a',
    opacity: 0.7,
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  iconContainer: {
    marginRight: 22,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicIndex: {
    color: '#a09f9f',
    fontWeight: '600',
    fontSize: 16,
  },
  detailsContainer: {
    justifyContent: 'space-between',
    flex: 1.3,
  },
  musicTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  musicAuthor: {
    color: '#a09f9f',
  },
  reproductions: {
    color: '#a09f9f',
    flex: 1,
  },
  time: {},
});
