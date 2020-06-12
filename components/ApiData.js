import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator} from 'react-native';
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
    if(this.props.loader){
        return (
            <View style={styles.container}>
            <ActivityIndicator size='large' color='#01CBC6'/>
            </View>
        );
    }
    return (
      <View style={styles.container}>
      {<FlatList data={this.props.data} 
      keyExtractor={item=>item.email} 
      renderItem={({item})=>
      <Card>
      <CardItem>
      <View style={styles.container}>
      <Image source={{uri:item.picture.medium}} style={styles.profilepic}/>
      </View>
      <View style={styles.userinfo}>
      <Text>{`Name : ${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
      <Text>{`Email : ${item.email}`}</Text>
      <Text>{`City : ${item.location.city}`}</Text>
      <Text>{`Phone : ${item.phone}`}</Text>
      </View>
      </CardItem>
      </Card>
    }/>}
      </View>
    );
  }
}

function mapStateToProps(state){
    return {
        data:state.data,
        loader:state.loader
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
    justifyContent: 'center',
  },
  profilepic:{
      flex:2,
      height:100,
      width:100,
      marginEnd:10
  },
  userinfo:{
      flex:5,
      flexDirection:'column',
      marginStart:70
  },

});
