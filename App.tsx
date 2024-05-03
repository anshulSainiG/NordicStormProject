import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation'
import { Provider } from './src/context'

const App = () => {
  return (
    <Provider>
      <RootNavigation />
    </Provider>
  )
}

export default App