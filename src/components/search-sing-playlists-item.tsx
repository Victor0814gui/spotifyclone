import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Icon } from '../assets';

export function SearchSingPlaylistsItem() {
  const [onHover, setOnHover] = useState(false);
  return (
    <View
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      style={[styles.playlistItemContainer, onHover && styles.playlistItemContainerHovered]}
    >
      <Image
        style={styles.thumbnail}
        source={{
          uri: 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71'
        }}
        resizeMode='contain'
      />
      <Text style={styles.singName}>huvey altar </Text>
      <Text style={styles.authorName}>Hulvey, Forrest frank</Text>
      {onHover && <View style={styles.buttonPlayerContainer}>
        <Icon name={require('../assets/pause-black-large.svg')} />
      </View>}
    </View>
  )
}

const buttonPlayerContainerSize = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  playlistItemContainer: {
    paddingHorizontal: 21,
    paddingVertical: 34,
    borderRadius: 5,
    margin: 12,
  },
  playlistItemContainerHovered: {
    backgroundColor: "#444444",

  },
  thumbnail: {
    height: 170,
    width: 170,
    borderRadius: 5,
    marginBottom: 16,
  },
  singName: {
    fontWeight: "800",
    fontSize: 18,
  },
  authorName: {
    fontWeight: "500",
    fontSize: 14,
    color: "#d9d9d9"
  },
  buttonPlayerContainer: {
    position: "absolute",
    top: "50%",
    right: 20,
    backgroundColor: '#1ed760',
    alignItems: "center",
    justifyContent: "center",
    width: buttonPlayerContainerSize,
    height: buttonPlayerContainerSize,
    borderRadius: buttonPlayerContainerSize / 2,
  },
});
