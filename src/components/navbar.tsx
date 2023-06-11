import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from '../assets';
import React, { useState } from 'react';
import { DrawerContentComponentProps } from "@react-navigation/drawer"
import { Pressable } from 'react-native-windows';

const icons = [
  {
    name: 'home',
    component: require('../assets/home.svg'),
    componentSelected: require('../assets/home-selected.svg'),
    label: 'Inicio',
  },
  {
    name: 'search',
    component: require('../assets/search.svg'),
    componentSelected: require('../assets/search-selected.svg'),
    label: 'Buscar',
  },
  {
    name: 'library',
    component: require('../assets/library.svg'),
    componentSelected: require('../assets/home.svg'),
    label: 'Sua lista',
  },
];

function NavbarItem({ iconSelected = "", onPress = () => { }, icon = "", label = 'home', selected = false }) {
  return (
    <Pressable onPress={onPress}>

      <View style={styles.navbarItemContainer}>
        {selected ? <Icon name={iconSelected} /> : <Icon name={icon} />}
        <Text
          style={[
            styles.navbarItemContainerText,
            selected && styles.navbarItemContainerTextActive,
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

export function Navbar({ navigation: { navigate }, state }: DrawerContentComponentProps) {
  const onPress = (index: number, routeName: string) => {
    console.log(new Date().getMilliseconds());
    navigate(routeName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <NavbarItem
          onPress={() => onPress(0, "Dashboard")}
          key={"12gaa4asdf-2qwer4"}
          icon={icons[0].component}
          selected={0 === state.index}
          label={icons[0].label}
          iconSelected={icons[0].componentSelected}
        />
        <NavbarItem
          onPress={() => onPress(1, "Search")}
          key={"12asdjhk-22934"}
          icon={icons[1].component}
          selected={1 === state.index}
          label={icons[1].label}
          iconSelected={icons[1].componentSelected}
        />
      </View>
      {/* <View style={styles.section}>
        <NavbarItem label="Inicio" />
        <NavbarItem label="Buscar" />
      </View> */}
      <View style={styles.section}>
        <View style={styles.playlistsContainer}>
          <NavbarItem key={"1234asdf-234"} icon={icons[2].component} selected label={icons[2].label} />
          <Text style={styles.playlistsContainerText}>Hype</Text>
          <Text style={styles.playlistsContainerText}>Minha playlist n°2</Text>
          <Text style={styles.playlistsContainerText}>Minha playlist n°3</Text>
          <Text style={styles.playlistsContainerText}>Rap do Mbappé</Text>
          <Text style={styles.playlistsContainerText}>Rap do Mbappé</Text>
          <Text style={styles.playlistsContainerText}>Rap do Mbappé</Text>
          <Text style={styles.playlistsContainerText}>Rap do Mbappé</Text>
          <Text style={styles.playlistsContainerText}>Rap do Mbappé</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 260,
    flex: 1,
    height: '100%',
    backgroundColor: '#000000',
    padding: 12,
  },
  section: {
    padding: 12,
    backgroundColor: "#111111",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0,
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
  // aditionalSection: {
  //   marginTop: 22,
  //   paddingBottom: 4,
  //   borderBottomWidth: 1,
  //   borderColor: '#222222',
  //   // backgroundColor: '#222222',
  // },
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
