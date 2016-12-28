import React, { Component, PropTypes } from 'react';
import { View, TextInput, Image, Button, Alert } from 'react-native';

const onPressFollowing = () => {
  Alert.alert('Button has been pressed!');
};

export default class SetProfileScene extends Component {

  render() {
    return (
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

        <View style={{flex: 2}}>
          <TextInput 
            style={{justifyContent: 'space-around'}}
            placeholder="Enter your Github username"
          />
          <Button
            style={{ width: 50, height: 50}}
            title="View Profile" 
            onPress={onPressFollowing}/>
        </View>

      </View>
    )
  }
}