import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import db from './config';
import {Header} from 'react-native-elements';
import dictionary from './localdb';
export default class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      word:'',
      lexicalCategory:'',
      definition:'',
      isSearchedPressed:false,
      text:'',
      
    }
  }
  getWord= (t)=>{
    var text = t.toLowerCase();
     const word = dictionary[text]['word'];
    const lexicalCategory = dictionary[text]['lexicalCategory'];
    const definition = dictionary[text]['definition'];
      this.setState({
        word:word,
        lexicalCategory:lexicalCategory,
        definition:definition     
       })
    }
    

  render(){
   return (
    <View>
      <Header
          backgroundColor={'yellow'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: 'blue', fontSize: 20, fontWeight: 'bold' },
          }}
        />
        <TextInput 
           style = {styles.inputBox}
           onChangeText = {text=>{
             this.setState({
               text:text,
               
               word:'Loading...',
               lexicalCategory:'',
               
               definition:'',

             })
           }}     
           value = {this.state.text}
        />
      <TouchableOpacity
      style = {styles.searchButton}
      onPress = {()=>{this.getWord(this.state.text)}
        
      }
      >
        <Text> Search</Text>
      </TouchableOpacity>
      <View>
      <Text>
        word:{this.state.word}
        
      </Text>
      <Text>
      lexicalCategory:{this.state.lexicalCategory}
      </Text>
      <Text>
        Definition:{this.state.definition}
      </Text>
      
      </View>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 60,
    width: '80%',
    borderWidth: 4,
    alignSelf: 'center',
    textAlign: 'center',
    outline: 'none',
    height: 40,
  },
  searchButton:{
    width:100,
    height:100,
    backgroundColor:'blue',
    
  }
  
})


