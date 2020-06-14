// /**
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {StyleSheet, ScrollView, View, Text, FlatList} from 'react-native';
// import YouTubeVideo from './components/YoutubeVideo';
// import {BASE_URL} from './global';

// export default class App extends React.Component {
//   state = {resources: [], loader: true};
//   componentDidMount = async () => {
//     try {
//       const resources = await fetch(`${BASE_URL}/getResources.php`)
//         .then((res) => res.json())
//         .then((res) => res);

//       this.setState({resources: resources, loader: false});
//     } catch (err) {
//       console.warn(err);
//     }
//   };
//   render() {
//     const {loader = true, resources = []} = this.state;

//     return (
//       <View style={styles.container}>
//         {loader ? (
//           <Text>Loading...</Text>
//         ) : (
//           <FlatList
//             data={resources}
//             renderItem={({item}) => (
//               <View style={{padding: 10}}>
//                 <YouTubeVideo key={item.rid} resource={item} />
//               </View>
//             )}
//             keyExtractor={(item) => item.id}
//           />
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
// });

// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
