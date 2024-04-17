import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';

function SignButton(){
    return(
  <View style={{flexDirection:'row',marginTop:50}}>
    <View style={{height:70,flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:25,fontWeight:'700',color:'black',marginLeft:35}}>Sign up</Text>
    </View>
    <View style={{height:70,flex:1,justifyContent:'center',alignItems:'flex-end'}}>
      <View style={{height:50,width:50,backgroundColor:'#367cfe',marginRight:40,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
      <Icon size={40} color={'white'} name={'arrowright'}type='antdesign'/>
  
      </View>
    </View>
  
    
  </View>
    );
  
  }
  function Signup(){
    return(
  <View style={{marginTop:100}}>
    
    <View style={{height:70,justifyContent:'center',alignItems:'flex-end'}}>
    <Text style={{fontSize:15,fontWeight:'700',color:'black',marginRight:50,marginBottom:40}}>Sign in</Text>
    </View>
  
    
  </View>
    );
  
  }
 function SignupField(){
    return(
  <View style={{marginTop:100}}>

<View style={{
      backgroundColor:'white',borderRadius:20,height:50,marginHorizontal:30,justifyContent:'center',paddingLeft:20
    }}>
  <TextInput style={{fontSize:15,color:'black'  
    }}
    placeholder='Name'
    placeholderTextColor={'black'} />
    </View>
  
  
  <View style={{
      backgroundColor:'white',borderRadius:20,height:50,marginHorizontal:30,justifyContent:'center',paddingLeft:20,marginTop:20
    }}>
  <TextInput style={{fontSize:15,color:'black'  
    }}
    placeholder='Your Email'
    placeholderTextColor={'black'} />
    </View>
  
    <View style={{
      backgroundColor:'white',borderRadius:20,height:50,marginHorizontal:30,justifyContent:'center',paddingLeft:20,marginTop:20
    }}>
  <TextInput style={{fontSize:15,color:'black' 
    }}
    secureTextEntry={true}
    placeholder='password'
    placeholderTextColor={'black'} />
    </View>
    <SignButton/>
    <Signup/>
    
  </View>
    );
  }

export class SignupScreen extends Component {
  render() {
    return (
    
       <View style={styles.Container}>
<Image style={{width:'100%',height:'100%',position:'absolute'}} source={
  require('../../assets/img/image2.jpg')
} resizeMode='stretch'/>
<Text style={{fontSize:50,color:'white',fontWeight:'600',marginTop:100,marginLeft:20}}>{'Create\nAccount'}</Text>
<KeyboardAwareScrollView keyboardShouldPersistTaps='never'>
<SignupField/>

</KeyboardAwareScrollView>
   </View>
      
    )
  }
}

export default SignupScreen

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor:'white',
    }
   
  });