
import React, {Component} from 'react'
import { View, ScrollView, Dimensions, StyleSheet} from 'react-native'
import {Header, ImageCard, Layout} from './src/components/uikit'
import {h,w} from './constants'

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class App extends React.Component {
    state = {
      title: 'Migrant',
      data: []
    }

  componentDidMount = async() => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch(e) {
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    console.log('app');
    return (
      <View>
        <Header title={title} />
        <ScrollView>
        <Layout>
          { data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))
          }
        </Layout>
        </ScrollView>
      </View>
    )
  }
}
