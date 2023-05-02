import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from '../assets';

const icons = [
  {
    name: 'home',
    component: require('../assets/home.svg'),
    label: 'Inicio',
  },
  {
    name: 'search',
    component: require('../assets/search.svg'),
    label: 'Buscar',
  },
  {
    name: 'library',
    component: require('../assets/library.svg'),
    label: 'Sua lista',
  },
];

function NavbarItem({icon, label = 'home', selected = false}) {
  return (
    <View style={styles.navbarItemContainer}>
      {icon && <Icon name={icon} />}
      <Text
        style={[
          styles.navbarItemContainerText,
          selected && styles.navbarItemContainerTextActive,
        ]}>
        {label}
      </Text>
    </View>
  );
}

export function Navbar() {
  return (
    <View style={styles.container}>
      {icons.map((e, i) => (
        <NavbarItem key={i} icon={e.component} selected label={e.label} />
      ))}
      <View style={styles.aditionalSection}>
        <NavbarItem label="Inicio" />
        <NavbarItem label="Buscar" />
      </View>
      <View style={styles.playlistsContainer}>
        <Text style={styles.playlistsContainerText}>Hype</Text>
        <Text style={styles.playlistsContainerText}>Minha playlist n°2</Text>
        <Text style={styles.playlistsContainerText}>Minha playlist n°3</Text>
        <Text style={styles.playlistsContainerText}>Rap do Mbappé</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: '100%',
    backgroundColor: '#000000',
    padding: 12,
  },
  navbarItemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  navbarItemContainerIcon: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: '#1ed760',
  },
  navbarItemContainerText: {
    color: '#b0b0b0',
    marginLeft: 14,
    fontWeight: '700',
  },
  navbarItemContainerTextActive: {
    color: '#ffffff',
  },
  aditionalSection: {
    marginTop: 22,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#222222',
  },
  playlistsContainer: {
    marginTop: 9,
  },
  playlistsContainerText: {
    color: '#b0b0b0',
    fontWeight: '500',
    marginVertical: 6,
    fontSize: 14,
  },
});
