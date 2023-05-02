import {View, Text, StyleSheet} from 'react-native';

import {Navbar} from './components/navbar';
import {PlayerControls} from './components/player-controls';
import {PlayListDetails} from './playlist-details';
import {Search} from './search-screen';
import AnimatedGradientExampleBody from './animated-gradient-example-body';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Navbar />
        <Search />
      </View>
      <PlayerControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 21,
  },
});
