const drawerOptions = (navigation, label, icon) => {    
  return {
    drawerPosition: 'left',
    drawerLabel: label,
    drawerIcon: icon,     
    drawerTintColor: '#F9FDCE',
    drawerTitleStyle: {
      fontWeight: 'bold'
    }    
  }
}

export { drawerOptions }