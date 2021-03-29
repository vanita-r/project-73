import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      search: '',
    };
  }
    render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={styles.searchBar}>
            <TextInput style={styles.bar}
              placeholder="Search"
              onChangeText={(text)=>{this.setState({search:text})}}
            />
            <TouchableOpacity style={styles.searchButton}
              onPress={()=>{this.searchTransaction(this.state.search)}}>
                <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar:{ marginTop:50,flexDirection:"row", height:40, width:'auto', borderWidth:0.5, alignItems:'center', backgroundColor:'gray' }, 
    bar:{ borderWidth:2, height:30, width:300, paddingLeft:10 }, 
    searchButton:{ borderWidth:1, height:30, width:50, alignItems:'center', justifyContent:'center', backgroundColor:'green' } 
});