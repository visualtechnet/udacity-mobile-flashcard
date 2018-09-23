import { createDrawerNavigator } from 'react-navigation';
import { HomeDrawer } from '../drawer'

const MainDrawer = createDrawerNavigator({
  Dashboard: HomeDrawer
}, { 
  initialRouteName: 'Dashboard' 
})

export { MainDrawer }