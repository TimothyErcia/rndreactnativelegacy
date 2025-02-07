import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function SimpleView() {
  return (
    <View style={style.viewStyle}>
        <Text style={style.textStyle}>Hello World</Text>
    </View>
  )
}

const style = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
    }
})
export default SimpleView