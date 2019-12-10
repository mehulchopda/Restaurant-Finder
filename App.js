
import React, { useEffect, useState } from 'react'
import { AppLoading } from 'expo'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultShowScreen'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Food Finder'

  }
})
const AppNavigator = createAppContainer(navigator)

const appScreen = () => {
  const [isReady, setIsReady] = useState(false)

  const getResult = async () => {
    try {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
      })
      setIsReady(true)
    } catch (err) {
      console.log('font is not loading')
    }
  }
  useEffect(() => {
    getResult()
  })

  return (
    <>
      {!isReady ? (<AppLoading/>) : (<AppNavigator/>)}

    </>
  )
}

export default appScreen
