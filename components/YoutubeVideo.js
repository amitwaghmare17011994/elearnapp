import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class YouTubeVideo extends React.Component {
  state = {
    playerWidth: Dimensions.get('window').width,
    modalVisible: false,
    videoToShow: {},
  };

 
  render() {
    const {resource = {}} = this.props;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('VideoScreen',{resource});
          }}>
          <Text>{resource.rname}</Text>
          <Image
            style={{width: 300, height: 300}}
            source={{uri: `https://img.youtube.com/vi/${resource.rpath}/0.jpg`}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
