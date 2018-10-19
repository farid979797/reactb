
import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import {h,w} from '../../../constants'


const ImageCard = ({ data }) => {
  const { image, name } = data
  const { container, sub, h1, cover } = styles
  const img = 'https${image.medium.slice(4)}'
  return(
    <View style={container}>
    <View style={sub}>
        <Image style={cover} source={{uri: img}} />
    </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    width: w / 3.5,
    paddingVertical: 10
  },
  sub:{
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.4,

  },
  h1:{
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover:{
    width: w / 4,
    height: w * 0.3 ,
    borderRadius: 10,
    alignSelf: 'center',
  }
})

export {ImageCard}
