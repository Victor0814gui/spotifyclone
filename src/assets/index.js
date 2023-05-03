import {Image, StyleSheet} from 'react-native';

export function Icon({name, style}) {
  return (
    <Image
      resizeMode="stretch"
      style={[styles.container, style]}
      source={name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
