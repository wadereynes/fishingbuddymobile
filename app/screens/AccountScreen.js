import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import useAuth from '../auth/useAuth'
import usersApi from '../api/users'
import useApi from '../hooks/useApi'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
]

function AccountScreen({ navigation }) {
  const getUsersApi = useApi(usersApi.getusers)

  useEffect(() => {
    getUsersApi.request(1, 2, 3)
  }, [])
  // const { user, logOut } = useAuth()
  const { user, logOut } = useAuth()
  // console.log(user)
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          data={getUsersApi.data}
          keyExtractor={(users) => users._id.toString()}
          title={user.name}
          subTitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={() => logOut()}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
})

export default AccountScreen
