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
  Linking
} from 'react-native';
import {ListItem, Button, SearchBar} from 'react-native-elements';
import {Content,Card,CardItem,Body, Left} from 'native-base';
import NavigationBar from 'react-native-navbar';
const rightButtonConfig = {
  title:'Back',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Quick Recipes',
};

const leftButtonConfig={
    title:'Home',
    handler:()=>alert('This is home!')};


export default class BreakfastData extends Component{
  render(){
     let articles =this.props.data.map((articleData, index) => {
       return(
          <Card>
           <CardItem>
           <Left>
               <Body>
                 <Text>{articleData.title}</Text>
                 <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL(articleData.source_url) } >Click Here To Open full recipe.</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={{uri:articleData.image_url}} alt="Recipe Image" style={{height: 200, width: null, flex: 1}}/>
           </CardItem>
          </Card>
       )
     });
       return(
         <View style={styles.container}>
                <Text style={styles.welcome}>
                 Breakfast Recipes
                </Text>
                 <Content>
                  {articles}
                 </Content>
        </View>
       );
  }
}

module.export =BreakfastData;

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
