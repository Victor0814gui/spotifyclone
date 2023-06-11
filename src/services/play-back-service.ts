import TrackPlayer, { TrackPlayerEvents, EventType } from 'react-native-track-player';


export async function PlaybackService() {
  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PAUSE, async () => {
    console.log('Event.RemotePause');
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PLAY, async () => {
    console.log('Event.RemotePlay');
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_NEXT, async () => {
    console.log('Event.RemoteNext');
    await TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_PREVIOUS, async () => {
    console.log('Event.RemotePrevious');
    await TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_JUMP_FORWARD, async (event) => {
    console.log('Event.RemoteJumpForward', event);
    TrackPlayer.seekTo(event.interval);
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_JUMP_BACKWARD, async (event) => {
    console.log('Event.RemoteJumpBackward', event);
    await TrackPlayer.seekTo(-event.interval);
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_SEEK, (event) => {
    console.log('Event.RemoteSeek', event);
    TrackPlayer.seekTo(event.position);
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_DUCK, async (event) => {
    console.log('Event.RemoteDuck', event);
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_QUEUE_ENDED, (event) => {
    console.log('Event.PlaybackQueueEnded', event);
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_TRACK_CHANGED, (event) => {
    console.log('Event.PlaybackActiveTrackChanged', event);
  });

  TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_STATE, async (event) => {
    console.log('Event.PlaybackState', event);
  });

  TrackPlayer.addEventListener(
    TrackPlayerEvents.PLAYBACK_METADATA_RECEIVED,
    async ({ title, artist, id }) => {
      const activeTrack = await TrackPlayer.getTrack(id);
      TrackPlayer.updateMetadataForTrack(id, {
        artist: [title, artist].filter(Boolean).join(' - '),
        title: activeTrack?.title,
        artwork: activeTrack?.artwork,
      });
    }
  );
}