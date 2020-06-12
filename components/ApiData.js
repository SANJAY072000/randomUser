import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {Card, CardItem} from 'native-base';
import {connect} from 'react-redux';
import getapidatatype from '../redux/action/getapidatatype';
import axios from 'axios';

class ApiData extends Component{

  componentDidMount(){
      this.getUser();
  }

  getUser=()=>{
      axios({
          url:'https://randomuser.me/api/?results=50'
      })
      .then(res=>this.props.getData(res.data.results))
      .catch(err=>console.log(err));
  }

  render(){
    return (
      <View style={styles.container}>
      {<FlatList data={this.props.data} 
      keyExtractor={item=>item.email} 
      renderItem={({item})=>
      <Text>{item.email}</Text>
    }/>}
      </View>
    );
  }
}

function mapStateToProps(state){
    return {
        data:state.data
    };
}

function mapDispatchToProps(dispatch){
    return {
        getData:users=>dispatch(getapidatatype(users))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ApiData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
