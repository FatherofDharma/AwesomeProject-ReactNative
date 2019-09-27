// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Bananas from './components/Bananas.js'
//
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello world, I am here!</Text>
//       </View>
//       // <Bananas />
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// ---------------------Greeting Example-----------------------------------
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

//--------------Image Example-----------------------------------------------
// import React, { Component } from 'react';
// import { AppRegistry, Image, View } from 'react-native';
//
// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View>
//         <Image source={pic} style={{width: 193, height: 110}}/>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => Bananas);
