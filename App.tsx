import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Src/redux/store'
import MainNav from './Src/Navigation/MainNav'

const App = () => {
  return (
    <Provider store={store}>
      <MainNav/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})