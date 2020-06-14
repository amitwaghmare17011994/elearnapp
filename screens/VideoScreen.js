import React, {Component} from 'react';
import {View, Text, PixelRatio, Dimensions} from 'react-native';

import YouTube from 'react-native-youtube';
import {API_KEY} from '../global';

export default class VideoScreen extends Component {
  state = {playerWidth: Dimensions.get('window').width};
  componentDidMount() {
    const {resource} = this.props.route.params;

    this.props.navigation.setOptions({title: resource.rname});
  }
  _youTubeRef = React.createRef();

  render() {
    const {resource} = this.props.route.params;

    return (
      <View style={{display: 'flex'}}>
        <YouTube
          style={[
            {
              height: PixelRatio.roundToNearestPixel(
                this.state.playerWidth / (16 / 9),
              ),
            },
          ]}
          ref={this._youTubeRef}
          apiKey={API_KEY}
          videoId={resource.rpath}
          fullscreen
          controls={1}
        />
      </View>
    );
  }
}
