/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {PlayerService} from './src/services/player';

import TrackPlayer from 'react-native-track-player';
import {Routes} from './src/routes';

AppRegistry.registerComponent(appName, () => Routes);
TrackPlayer.registerPlaybackService(() => PlayerService);
