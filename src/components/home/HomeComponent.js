import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import FloorComponent from './FloorComponent';
import TableComponent from './TableComponent';

const numColumns = 5;

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    this.props.onFetchAllTable();
  }

  _renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <FloorComponent title={item.title} />
        <FlatList
          data={item.data}//formatData(HomeReducer, numColumns)
          renderItem={(item, index) => (<TableComponent table={item} key={index} />)}
          numColumns={numColumns}
          keyExatractor={index => {index.toString()}}
        />
      </View>
    )
  }

  render() {
    const { HomeReducer } = this.props.data;
    return (
      <FlatList style={styles.container}
        data={HomeReducer}
        renderItem={this._renderItem}
        keyExatractor={index => {index.toString()}}
      />
    );
  }
}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(234, 195, 176)',
  },
  table: {
    flexDirection: 'row'
  }
});