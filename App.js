/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MovieList from './src/components/Play'

// console.log(new Error().stack);  

// const Sound = require('react-native-sound')
// // // export default class MovieList extends Component {
// class MovieList extends Component {
//   componentDidMount(){
//     console.log(Sound)
//     this.hello = new Sound('alexander_nakarada_superepic.mp3', Sound.MAIN_BUNDLE, (error) => {
//       if (error) {
//         return;
//       }
//     });
//   }
  
  
//   handlePress() {
//     this.hello.play((success) => {
//       if (!success) {
//         console.log('Sound did not play')
//       }
//     })
//   }

//   render() {
//       const { movie } = this.props
//       return (
//           <TouchableOpacity onPress={this.handlePress.bind(this)}>
//               <View>
//                     <Text>Start</Text>
//               </View>
//           </TouchableOpacity>
//       )
//   }
// }

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}  
          <View style={styles.body}>
            <Text>Hi There</Text>
            <MovieList/>  
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;