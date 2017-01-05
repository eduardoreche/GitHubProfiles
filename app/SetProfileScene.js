import React, { Component, PropTypes } from 'react';
import { View, Image, Alert } from 'react-native';
import ProfileApp from './components/ProfileApp';
import appStore from './stores/appStore';
import { Provider } from 'react-redux';

const onPressFollowing = () => {
  Alert.alert('Button has been pressed!');
};

export default class SetProfileScene extends Component {

  render() {
    return (
      <Provider store={appStore}>
        <View style={{
            flex: 1,  
            backgroundColor: '#fff'
          }}>
          
          <View style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'
            }}>
            <Image style={{width: 100, height: 100}} 
              source={require('./img/GitHub-Mark.png')} />
          </View>

          <ProfileApp />

        </View>
      </Provider>
    )
  }
}