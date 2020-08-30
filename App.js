import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';

import auth from '@react-native-firebase/auth';

export default class App extends React.Component {

    state={
      email:'',
      password: '',
      isAuthenticated: false,
    };

    login = async () => {
      const {email , password} = this.state;

    try{  
      const user = await auth()
        .signInWithEmailAndPassword(email, password);

        this.setState({isAuthenticated: true});
        console.log(user);
    } catch (err){
      console.log(err);
    }
  }

  render(){
    return(
      <View style={styles.container}>
          
            <TextInput 
              style={styles.input}
              placeholder = "Digite seu E-mail"
              autoCapitalize="none"
              value = {this.state.email}
              returnKeyType="next"
              placeholderTextColor='#696969'
              onChangeText={email => this.setState({email})}
            />
          
            <TextInput 
              style={styles.input}
              placheholder = "Password"
              placeholderTextColor="#696969"
              autoCapitalize='none'
              value = {this.state.password}
              secureTextEntry={true}
              returnKeyType="done"
              onChangeText={password => this.setState({password})}
            />
          
          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>
              Logar
            </Text>
          </TouchableOpacity>

          {this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
      </View>
    );
  }
} 
const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#ccc',
    alignItems:'center',
    justifyContent: 'center',
    padding: 20,
  },
  input:{
    height: 45,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 3,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 7,
  },
  button:{
    height: 45,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    
  }
});