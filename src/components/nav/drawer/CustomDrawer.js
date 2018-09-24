import React from 'react'
import { DrawerItems, ScrollView, Text } from 'react-native'
import { SafeAreaView } from "react-navigation"

const CustomDrawer = (props) => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Text>adsfasdfasfd</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

export { CustomDrawer }

