import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

function SignButton(p:any){
  const uemai=p.uemail;
  const upassword=p.upassword;

  const email='qbc@gmail.com';
  const password='1234';
 

  function goToHome(){
    if(email==uemai && password==upassword){
      p.stack2.navigate('Home')
    }else{
      Alert.alert('Message','Incorret email or password');
      console.log("Incorret email or password")
    }

  }
    return(
  <View style={{flexDirection:'row',marginTop:50}}>
    <View style={{height:70,flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:25,fontWeight:'700',color:'black',marginLeft:35}}>Sign in</Text>
    </View>
    
<TouchableOpacity onPress={ goToHome} activeOpacity={0.8}>
<View style={{height:70,flex:1,justifyContent:'center',alignItems:'flex-end'}}>
      <View style={{height:50,width:50,backgroundColor:'#367cfe',marginRight:40,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
      <Icon size={40} color={'white'} name={'arrowright'}type='antdesign'/>
  
      </View>
    </View>
</TouchableOpacity>
  
    
  </View>
    );
  
  }
  function Signup(p:any){
    const stack=p.stack;

    function GotoSighup(){
        stack.navigate('Signup')
        
    }
    return(
  <View style={{flexDirection:'row',marginTop:100}}>
    <View style={{height:70,flex:1,justifyContent:'center'}}>
      <TouchableOpacity onPress={GotoSighup} >
      <Text style={{fontSize:15,fontWeight:'700',color:'black',marginLeft:35}}>Sign up</Text>
      </TouchableOpacity>
    </View>
    <View style={{height:70,flex:1,justifyContent:'center',alignItems:'flex-end'}}>
    <Text style={{fontSize:15,fontWeight:'700',color:'black',marginRight:30}}>Forgot Password</Text>
    </View>
  
    
  </View>
    );
  
  }
export function LoginField(p:any){
    const stack=p.stack;
    const[useremail,setUseremail]=useState('');
    const[userpassword,setUserPw]=useState('');


    return(
  <View style={{marginTop:100}}>
  
  
  <View style={{
      backgroundColor:'white',borderRadius:20,height:50,marginHorizontal:30,justifyContent:'center',paddingLeft:20
    }}>
  <TextInput style={{fontSize:15,color:'black'  
    }}
 onChangeText={(v)=>setUseremail(v)}
    placeholder='Your Email'
    placeholderTextColor={'black'} />
    </View>
  
    <View style={{
      backgroundColor:'white',borderRadius:20,height:50,marginHorizontal:30,justifyContent:'center',paddingLeft:20,marginTop:20
    }}>
  <TextInput style={{fontSize:15,color:'black' 
    }}
    secureTextEntry={true}
    onChangeText={(v)=>setUserPw(v)}
    placeholder='password'
    placeholderTextColor={'black'} />
    </View>
    <SignButton stack2={stack} uemail={useremail} upassword={userpassword}/>
    <Signup stack={stack}/>
    
  </View>
    );
  }

const LoginScreen = (props:any) =>{
    const stack=props.navigation;
  
    return (
    
       <View style={styles.Container}>
<Image style={{width:'100%',height:'100%',position:'absolute'}} source={
  require('../../assets/img/image2.jpg')
} resizeMode='stretch'/>
<Text style={{fontSize:50,color:'white',fontWeight:'600',marginTop:100,marginLeft:20}}>{'Welcome\nBack'}</Text>
<KeyboardAwareScrollView keyboardShouldPersistTaps='never'>
<LoginField stack={stack}/>

</KeyboardAwareScrollView>
   </View>
      
    )
  }


export default LoginScreen

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor:'white',
    }
   
  });