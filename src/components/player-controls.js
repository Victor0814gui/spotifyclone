import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {TrackControls} from './track-controls';
import {PlayerAdictionalOptions} from './player-aditional-options';

export function PlayerControls() {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={[styles.musicDetailsContainer, {width: width / 3}]}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/711MCceyCBcFnzjGY4Q7Un/pt-BR/default',
          }}
        />
        <View style={styles.musicDetailsContent}>
          <Text style={styles.title}>Rose Petals</Text>
          <Text style={styles.substitle}>soft, Wishes and Dreams</Text>
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
    height: 90,
    width: '100%',
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
