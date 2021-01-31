import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {ListItem, Button, SearchBar} from 'react-native-elements';
import {Content,Card,CardItem,Body} from 'native-base';
import NavigationBar from 'react-native-navbar';
import BreakfastData from './breakfastData';




export default class Breakfast extends Component {
  constructor()
  {
    super()
    this.state ={
      data:[]
  }
  }
  // }
  // state={
  //   recipes:[],
  // };
  // async componentDidMount(){
  //   const recipes = await ajax.fetchInitialRecipes();
  //     this.setState({recipes});
  //
  //
  // }

  getData(){

    return fetch('breakfastRecipe.json')
   .then((response) => response.json())
   .then((responseJson) => {
     //alert(responseJson);
     this.setState({data:responseJson.recipes});
   })
   .catch((error) => {
     alert(error);
   });
  }
  componentDidMount(){
    this.getData();
  }

  render() {

    return (


//           <View>
          <BreakfastData data={this.state.data}/>
    //       </View>
    //
    //
    // </View>

    );
  }
}
module.export = Breakfast;

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#E6EE9C',
},
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
body:{
fontSize:20,
textAlign:'center',
marginBottom:10,
}

});
