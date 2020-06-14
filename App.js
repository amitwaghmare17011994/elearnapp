import * as React from 'react';

import {StyleSheet, ScrollView, View, Text, FlatList} from 'react-native';
import YouTubeVideo from './components/YoutubeVideo';
import {BASE_URL} from './global';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VideoScreen from './screens/VideoScreen';

const Stack = createStackNavigator();

export class HomeScreen extends React.Component {
  state = {resources: [], loader: true};
  componentDidMount = async () => {
    try {
      const resources = await fetch(`${BASE_URL}/getResources.php`)
        .then((res) => res.json())
        .then((res) => res);

      this.setState({resources: resources, loader: false});
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    const {loader = true, resources = []} = this.state;

    return (
      <View style={styles.container}>
        {loader ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={resources}
            renderItem={({item}) => (
              <View style={{padding: 10}}>
                <YouTubeVideo {...this.props} key={item.rid} resource={item} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
