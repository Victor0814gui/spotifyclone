import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from "./screens/dashboard";
import { NavigationContainer } from '@react-navigation/native';
import { Navbar } from "./components/navbar";
import { Search } from "./screens/search";
import { Seekbar } from "./components/seekbar";
import { PlayerControls } from "./components/player-controls";
const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <Navbar {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#000000"
            },
            headerShown: false,
            drawerType: "permanent",
            drawerContentContainerStyle: {
              backgroundColor: "#000000"
            },
          }}
        >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Search" component={Search} />
        </Drawer.Navigator>
      </NavigationContainer>
      <PlayerControls />
    </>
  );
}