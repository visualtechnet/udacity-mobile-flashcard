import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MainStack } from '../mainStack';
import { drawerOptions } from '../../header';

const HomeDrawer = createDrawerNavigator({ HomeDrawer: MainStack })

HomeDrawer.navigationOptions = ({ navigation }) => {
  return drawerOptions(navigation, 'Dashboard', ({ tintColor }) => <FontAwesome name="home" color={tintColor} />)
}

export { HomeDrawer }