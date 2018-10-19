
import React, {Component} from 'react';
import { View, ScrollView, Dimensions, StyleSheet} from 'react-native'
import {Header, ImageCard, Layout} from '../components/uikit'
import {h,w} from './constants'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends React.Component {
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
    console.log('hs')
    return (
      <View>
        <Header title={title} />
        <ScrollView>
        <Layout>
          { data.map(item => (
              <ImageCard
              data={item.show}
              key={item.show.id} />
            ))
          }
        </Layout>
        </ScrollView>
      </View>
    )
  }
}
