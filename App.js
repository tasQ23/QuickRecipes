import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import NavigationBar from 'react-native-navbar';
import { createStackNavigator } from 'react-navigation';
import Breakfast from './breakfast';



type Props = {};
export class App extends Component  {
  render() {
    return(
    <View style={styles.container}>
           <Text style={styles.welcome}>
            Meals
           </Text>

           <ScrollView>
           <Card
             title='Breakfast'
             image={require('./breakfast.jpg')}>

             <Button
               backgroundColor='#03A9F4'
               fontFamily='Lato'
               buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
               title='Recipes'
               onPress={() => this.props.navigation.navigate('Breakfast')}/>
           </Card>
           <Card
                        title='Lunch'
                        image={require('./lunch.jpg')}>

                        <Button

                          backgroundColor='#03A9F4'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Recipes' />
           </Card>
           <Card
                        title='Dinner'
                        image={require('./dinner.jpg')}>

                        <Button

                          backgroundColor='#03A9F4'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Recipes' />
           </Card>
           <Card
                          title='Snacks'
                          image={require('./lunner.jpg')}>

                           <Button

                           backgroundColor='#03A9F4'
                           fontFamily='Lato'
                           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                           title='Recipes' />
                      </Card>
           <Card
                        title='Dessert'
                        image={require('./snacks.jpg')}>

                        <Button
                          backgroundColor='#03A9F4'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          title='Recipes' />
                      </Card>
           </ScrollView>
    </View>

   );
  }
}

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

});

export default createStackNavigator({
  Home: App,
  Breakfast:Breakfast,
},{initialRouteName:'Home',
});
