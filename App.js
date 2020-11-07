// import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, TextInput, Text, Switch } from 'react-native'

import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'

// import Card from './app/components/Card'
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
// import ViewImageScreen from './app/screens/ViewImageScreen'
// import MessagesScreen from './app/screens/MessagesScreen'

export default function App() {
  return <ListingEditScreen />
}
