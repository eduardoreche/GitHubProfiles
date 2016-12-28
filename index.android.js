/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import SetProfileScene from './app/SetProfileScene';

export default class GitHubProfiles extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          (
            <SetProfileScene />
          )
        } />

    );
  }
}

AppRegistry.registerComponent('GitHubProfiles', () => GitHubProfiles);
