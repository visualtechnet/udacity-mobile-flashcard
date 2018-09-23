import { createDrawerNavigator } from 'react-navigation';
import { drawerOptions } from '../../header';
import { MainStack } from '../mainStack';

const MainDrawer = createDrawerNavigator({
  Dashboard: MainStack
}, {
  initialRouteName: 'Dashboard',
  navigationOptions: drawerOptions
})

export { MainDrawer }