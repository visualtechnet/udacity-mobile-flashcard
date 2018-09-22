const headerOptions = options => {
  const header = Object.assign({}, ...options, {
    headerStyle: {
      backgroundColor: '#0C202B'
    },
    headerTintColor: '#F9FDCE',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  })

  return header
}

export { headerOptions }