import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

const Profile = ({ profile }) => {
  return (
    <View>
      <Image source={{uri: profile.avatar_url}} style={{ height: 50, width: 50}} />
      <Text>{profile.name}</Text>
    </View>
  )
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Profile;