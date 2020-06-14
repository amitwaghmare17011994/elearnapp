import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import YouTube from 'react-native-youtube';
import {API_KEY} from '../global';

export default class YouTubeVideo extends React.Component {
  state = {
    playerWidth: Dimensions.get('window').width,
    modalVisible: false,
    videoToShow: {},
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  _youTubeRef = React.createRef();

  render() {
    const {resource = {}} = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Text>{resource.rname}</Text>
          <Image
            style={{width: 300, height: 300}}
            source={{uri: `https://img.youtube.com/vi/${resource.rpath}/0.jpg`}}
          />
        </TouchableOpacity>
        {/* <YouTube
          // ref={this._youTubeRef}
          apiKey={API_KEY}
          videoId={resource.rpath}
          controls={1}
          style={[
            {
              height: PixelRatio.roundToNearestPixel(
                this.state.playerWidth / (16 / 9),
              ),
            },
            styles.player,
          ]}
        /> 
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
