import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Homepage extends Component {
  render() {
    return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
      }}><Text style={{
        fontSize:30,
        color:'black',

      }}>Homepage</Text>
        
      </View>
    )
  }
}

export default Homepage