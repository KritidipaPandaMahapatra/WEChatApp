import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import formHead2 from '../../../CommonCss/pagecss'
const Signup = () => {
  return (
    <View style={styles.container}>
    <WavyHeader customStyles={styles.svgCurve} />
     <View style={styles.headerContainer}>
       <Text style={styles.headerText}>WEChat</Text>
   </View>
   <View style={{justifyContent:'center',alignItems:'center',marginTop:130,marginHorizontal:25}}>
     <Text style={formHead2}>Create a new account</Text>
     <TextInput style={styles.textInput} placeholder="Enter Email"/>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
           <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
       <Text style={[styles.text,{marginBottom:30,marginTop:20}]}>Forgot password?</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row'}} >
         <Text style={styles.text}>Don't have an account?</Text>
         <Text  style={[styles.text,{color:'#4682b4'}]} onPress={() => navigation.navigate('Signup_EnterEmail')}>Sign Up</Text>
       </TouchableOpacity>
     </View>
     <WavyFooter customStyles={styles.svgCurvefooter} />
   </View>
  )
}

export default Signup

const styles = StyleSheet.create({})