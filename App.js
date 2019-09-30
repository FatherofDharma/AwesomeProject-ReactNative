// ---------------Learn-The-Basics-Lesson----------------------------------------
//
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello world, I am here!</Text>
//       </View>
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
//

//------------Props-Lesson-Example----------------------------------------------
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

// -------------Props-Lesson-Greeting Example-----------------------------------
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


//-----------------State Example------------------------------------------------
//
// import React, { Component } from 'react';
// import { AppRegistry, Text, View, StyleSheet } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };
//
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }
//
//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//
//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
//
// class Blink2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };
//
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 2000);
//   }
//
//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//
//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
//
// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View style={styles.container} >
//         <Blink text='I love to blink' />
//         <Blink2 text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
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
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);

//-------------------Styles Example---------------------------------------------

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
//   container: {
//     flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//   }
// });
//
// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);

//-------------------Height-and-Width-Lesson-Fixed-Dimensions-------------------
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue' }} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue' }} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue' }} />
//       </View>
//     );
//   }
// }
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
//-------------------Height-and-Width-Lesson-Flex-Dimensions--------------------
//
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       //The parent will not have dimenions, so the children can't expand.
//       //What if you add `height:300` instead of `flex: 1`?
//       <View style={{flex: 1}}>
//         <View style={{flex:1, backgroundColor: 'powderblue' }} />
//         <View style={{flex:2, backgroundColor: 'skyblue' }} />
//         <View style={{flex:3, backgroundColor: 'steelblue' }} />
//       </View>
//     );
//   }
// };
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);

//---------------Layout-with-Flexbox-Lesson-Flex-Direction-Example--------------
//
// import React, { Component } from 'react';
// import {  AppRegistry, View  } from 'react-native';
//
// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View style={{flex:1, flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

//---------------Layout-with-Flexbox-Lesson-Justify-Content-Example-------------
//
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // Try setting `justifyContent` to `center`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);

//---------------Layout-with-Flexbox-Lesson-Align-Items-Example-----------------

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class AlignItemsBasics extends Component {
//   render() {
//     return (
//       // Try setting `alignItems` to 'flex-start'
//       // Try setting `justifyContent` to `flex-end`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{height: 100, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);

//-------------------------Handling-Text-Input-Lesson---------------------------

// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
//
// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View style={{padding: 10, alignItems: 'center'}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

//---------------------------Handling-Touches-Lesson----------------------------


//----------------Handling-Touches-Lesson-Button-0.61-Example-------------------
//
// import React, { Component } from 'react';
// import { Button, StyleSheet, View, AppRegistry } from 'react-native';
//
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });
//
// // // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
//-----------------Handling-Touches-Lesson-Touchable-Highlight------------------
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   TouchableHighlight,
//   Text,
//   View,
// } from 'react-native';
//
// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: 0 }
//   }
//
//   onPress = () => {
//     this.setState({
//       count: this.state.count+1
//     })
//   }
//
//  render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//          style={styles.button}
//          onPress={this.onPress}
//         >
//          <Text> Touch Here </Text>
//         </TouchableHighlight>
//         <View style={[styles.countContainer]}>
//           <Text style={[styles.countText]}>
//             { this.state.count !== 0 ? this.state.count: null}
//           </Text>
//         </View>
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10
//   },
//   countText: {
//     color: '#FF00FF'
//   }
// })
//
// AppRegistry.registerComponent('AwesomeProject', () => App)
//
//---------------------Button-Example-From-Different-Section--------------------

// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';
// import Constants from 'expo-constants';
//
// function Separator() {
//   return <View style={styles.separator} />;
// }
//
// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.title}>
//           The title and onPress handler are required. It is recommended to set
//           accessibilityLabel to help make your app usable by everyone.
//         </Text>
//         <Button
//           title="Press me"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           Adjust the color in a way that looks standard on each platform. On
//           iOS, the color prop controls the color of the text. On Android, the
//           color adjusts the backgroud color of the button.
//         </Text>
//         <Button
//           title="Press me"
//           color="#f194ff"
//           onPress={() => Alert.alert('Button with adjusted color pressed')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           All interaction for the component are disabled.
//         </Text>
//         <Button
//           title="Press me"
//           disabled
//           onPress={() => Alert.alert('Cannot press this one')}
//         />
//       </View>
//       <Separator />
//       <View>
//         <Text style={styles.title}>
//           This layout strategy lets the title define the width of the button.
//         </Text>
//         <View style={styles.fixToText}>
//           <Button
//             title="Left button"
//             onPress={() => Alert.alert('Left button pressed')}
//           />
//           <Button
//             title="Right button"
//             onPress={() => Alert.alert('Right button pressed')}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => App)
//
//-----------------------------Using-A-ScrollView-------------------------------
//
// import React, { Component } from 'react';
// import { ScrollView, Image, Text, AppRegistry } from 'react-native';
//
// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:34}}>This is Fun, I can write stuff within a scroll window!</Text>
//           <Text style={{fontSize:60}}>Scroll me plz</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:60}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:60}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:60}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:60}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockedMe)

//---------------------------Flatlist-Basics-Lesson-----------------------------
//
// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View, AppRegistry } from 'react-native';
//
// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Dan'},
//             {key: 'Dominic'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })
//
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics)

//-----------------Flatlist-Basics-Lesson-SectionList-Example-------------------

// import React, { Component } from 'react';
// import { SectionList, StyleSheet, Text, View, AppRegistry } from 'react-native';
//
// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })
//
// AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics)

// -------------------------------Networking-Lesson--------------------------------

import React from 'react';
import { FlatList, ActivityIndicator, Text, View, AppRegistry  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

  if(this.state.isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return(
    <View style={{flex: 1, paddingTop:20}}>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
        keyExtractor={({id}, index) => id}
      />
    </View>
  );
}
}


AppRegistry.registerComponent('AwesomeProject', () => FetchExample)
