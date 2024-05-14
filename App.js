import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Home from './screens/Home';
import PTTT1 from './screens/PTTT/PTTT1';
import PTTT2 from './screens/PTTT/PTTT2';
import PTTT3 from './screens/PTTT/PTTT3';
import LHSK1 from './screens/LHSK/LHSK1';
import LHSK2 from './screens/LHSK/LHSK2';
import DetailsScreen from './screens/PTTT/Detail';
import LoginScreen from './screens/LoginScreen';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Detail" component={DetailsScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="PTTT1" component={PTTT1} options={{ headerShown: false }} />
        <Drawer.Screen name="PTTT2" component={PTTT2} options={{ headerShown: false }} />
        <Drawer.Screen name="PTTT3" component={PTTT3} options={{ headerShown: false }} />
        <Drawer.Screen name="LHSK1" component={LHSK1} options={{ headerShown: false }} />
        <Drawer.Screen name="LHSK2" component={LHSK2} options={{ headerShown: false }} />
        <Drawer.Screen name="Logout" component={LoginScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
