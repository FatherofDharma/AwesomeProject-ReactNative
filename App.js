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
// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
//
// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }
//
// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

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

//-----------------State Example-------------------------------------------

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

class Blink2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 2000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Blink text='I love to blink' />
        <Blink2 text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
