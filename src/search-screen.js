import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchPlaylistItem} from './components/search-playlist-item';

export function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar recentes</Text>
      <SearchPlaylistItem />
      <Text style={styles.title}>navegar por todas as seções</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
});
