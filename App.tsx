import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation'
import { Provider } from './src/context'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  )
}

export default App