import React from 'react';
import { View } from 'react-native';
import Search from './Search';
import ProfileDisplay from './ProfileDisplay';

const ProfileApp = () => (
  <View style={{flex: 3, 
    justifyContent: 'center', 
    alignItems: 'center'
    }}>
    <Search />
    <ProfileDisplay />
  </View>
)

export default ProfileApp;