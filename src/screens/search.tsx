import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SearchSingPlaylistsItem } from '../components/search-sing-playlists-item';

export function Search() {
  const [onHover, setOnHover] = useState(false);
  const renderItem = () => <SearchSingPlaylistsItem />

  const keyExtractor = (_: any, index: number) => `${index}`;

  return (
    <View style={styles.container}>
      <Text>Buscas Recentes</Text>
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        key={3}
        numColumns={3}
      />
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
