import TrackPlayer, {
  Capability,
  CAPABILITY_PAUSE,
  CAPABILITY_PLAY,
  CAPABILITY_SKIP_TO_NEXT,
  CAPABILITY_SKIP_TO_PREVIOUS,
  CAPABILITY_STOP,
} from 'react-native-track-player';
import { PlaybackService } from './play-back-service';

export const tracks = [
  {
    id: '1111',
    url:
      'https://drive.google.com/uc?export=download&id=1AjPwylDJgR8DOnmJWeRgZzjsohi-7ekj',
    title: 'Longing',
    artist: 'David 1234v1234',
    artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
    duration: 143,
  },
  {
    id: '2222',
    url:
      'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
    title: 'Soul Searching (Demo)',
    artist: 'David 1234',
    artwork: 'https://i.picsum.photos/id/200/200/200.jpg',
    duration: 77,
  },
  {
    id: '3333',
    url:
      'https://drive.google.com/uc?export=download&id=1bmvPOy2IVbkUROgm0dqiZry_miiL4OqI',
    title: 'Lullaby (Demo)',
    artist: 'David adfsasdf',
    artwork: 'https://i.picsum.photos/id/300/200/200.jpg',
    duration: 71,
  },
  {
    id: '4444',
    url:
      'https://drive.google.com/uc?export=download&id=1V-c_WmanMA9i5BwfkmTs-605BQDsfyzC',
    title: 'Rhythm City (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.picsum.photos/id/400/200/200.jpg',
    duration: 106,
  },
  {
    id: '5555',
    url:
      'https://seed-mix-image.spotifycdn.com/v6/img/artist/711MCceyCBcFnzjGY4Q7Un/pt-BR/default',
    title: 'NAYEON “POP!”',
    artist: 'NAYEON',
    artwork: 'https://i.picsum.photos/id/400/200/200.jpg',
    duration: 172,
  },
];

const setupPlayer = async (
  options: Parameters<typeof TrackPlayer.setupPlayer>[0]
) => {
  const setup = async () => {
    try {
      await TrackPlayer.setupPlayer(options);
    } catch (error) {
      return (error as Error & { code?: string }).code;
    }
  };
  while ((await setup()) === 'android_cannot_setup_player_in_background') {
    // A timeout will mostly only execute when the app is in the foreground,
    // and even if we were in the background still, it will reject the promise
    // and we'll try again:
    await new Promise<void>((resolve) => setTimeout(resolve, 1));
  }
};



export const PlayerService = async function () {
  await setupPlayer({
    // autoHandleInterruptions: true,
  });
  await TrackPlayer.updateOptions({
    // Media controls capabilities
    // capabilities: [
    //   CAPABILITY_PAUSE,
    //   CAPABILITY_PLAY,
    //   CAPABILITY_STOP,
    //   CAPABILITY_SKIP_TO_NEXT,
    //   CAPABILITY_SKIP_TO_PREVIOUS,
    // ],
    // compactCapabilities: [
    //   CAPABILITY_PAUSE,
    //   CAPABILITY_PLAY,
    //   CAPABILITY_STOP,
    //   CAPABILITY_SKIP_TO_NEXT,
    //   CAPABILITY_SKIP_TO_PREVIOUS,
    // ],
    // stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE
    ]
  });
  await TrackPlayer.add(tracks);

  TrackPlayer.registerPlaybackService(() => PlaybackService)
}