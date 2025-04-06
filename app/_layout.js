import React from 'react'
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

const Layout = () => {
    return (
      <Stack>
        <Stack.Screen
            name= "index"
            options= {{
                headerShown: false
            }}
        />
        <Stack.Screen
            name= "home/index"
            options= {{
                headerShown: false
            }}
        />
        
      </Stack>
    )
}


export default Layout
