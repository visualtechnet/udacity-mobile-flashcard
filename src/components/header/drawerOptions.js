const drawerOptions = (navigation, label, icon) => {    
  return Object.assign({}, {
    drawerPosition: 'right',
    title: label,    
    drawerIcon: icon,     
    drawerTintColor: '#F9FDCE',
    drawerTitleStyle: {
      fontWeight: 'bold'
    }    
  })
}

export { drawerOptions }