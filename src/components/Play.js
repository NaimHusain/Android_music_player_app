import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
const Sound = require('react-native-sound')


export default class MovieList extends Component {
    componentDidMount(){
      this.hello = new Sound('alexander_nakarada_superepic.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      });
    }
    
    
    handlePress() {
      this.hello.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
      })
    }

    render() {
        const { movie } = this.props
        return (
            <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <View>
                      <Text>Start</Text>
                </View>
            </TouchableOpacity>
        )
    }
}