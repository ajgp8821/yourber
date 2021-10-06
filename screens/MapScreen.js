import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View>
      <Text>Here is the map stuff...</Text>
      <View style={tw`h-1/2`}>
        <Map></Map>
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})