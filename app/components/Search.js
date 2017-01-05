import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={{flex: 2}}>
        <TextInput
          style={{justifyContent: 'space-around'}}
          placeholder="Search GitHuber"
          onChangeText={(text) => {
            this.setState({text})
          }} 
          value={this.state.text}/>
        <Button
          style={{ width: 50, height: 50}}
          title="View Profile" 
          onPress={() => {
            this.props.dispatch(fetchProfile(this.state.text));
          }}/>
      </View>
    )
  }
}

export default connect()(Search);