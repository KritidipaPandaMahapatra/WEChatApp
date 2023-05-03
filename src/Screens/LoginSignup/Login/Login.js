import { StyleSheet, Text, View,Dimensions, TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'
import WavyHeader from '../../../Components/WavyHeader'
import WavyFooter from '../../../Components/WavyFooter'
import { container, svgCurve, loginheaderText,headerContainer,  welcometxt,textInput, button, buttonText, text,forgotpasstxt,svgCurvefooter} from '../../../CommonCss/pagecss'
//import LottieView from 'lottie-react-native';
const Login = ({navigation}) => {
  return (
    <View style={container}>
   <WavyHeader customStyles={svgCurve} />
    <View style={headerContainer}>
    {/* <View style={{height: 140, width: 140}}>
    <LottieView source={require('../../../../vV8FHdXBAO.json')} autoPlay loop />
     </View> */}
      <Text style={loginheaderText}>WEChat</Text>
  </View>
  <View style={{justifyContent:'center',alignItems:'center',marginTop:130,marginHorizontal:25}}>
    <View style={{marginRight:200}}>
    <Text style={welcometxt}>Welcome!</Text>
    </View>
    <TextInput style={textInput} placeholder="Enter Email"/>
    <TextInput style={textInput} placeholder="Enter Password"/>
    <TouchableOpacity style={button} onPress={() => navigation.navigate('MainPage')}>
          <Text style={buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword_Enteremail')}>
      <Text style={[text,{marginBottom:15,marginTop:10}]}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row'}} >
        <Text style={text}>Don't have an account?</Text>
        <Text  style={[text,{color:'#4682b4'}]} onPress={() => navigation.navigate('Signup_EnterEmail')}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <WavyFooter customStyles={svgCurvefooter} />
   </View>
  )
}

export default Login

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   backgroundColor:'black',
  //   flexDirection:'column'
  // },
//     svgCurve: {
//       position: 'absolute',
//       width:  Dimensions.get('window').width
//     },
//     headerText: {
//       fontSize: 30,
//       fontWeight: 'bold',
//       color: '#fff',
//       textAlign: 'center',
//       marginTop: 35
//     },
//     headerContainer:{
//      flexDirection:'row',
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     welcometxt:{
//       fontSize:20,
//       fontWeight:'700',
//       color:'white'
//     },
//     textInput:{
//       width: "90%",
//       backgroundColor: '#eeeeee', 
//       borderRadius: 25,
//       paddingHorizontal: 16,
//       fontSize: 16,
//       color: '#002f6c',
//       marginVertical: 10,
//     },
//     button: {
//       width: 300,
//       backgroundColor: '#4f83cc',
//       borderRadius: 25,
//       marginVertical: 10,
//       paddingVertical: 12,
//   },
//   buttonText: {
//       fontSize: 16,
//       fontWeight: '500',
//       color: '#ffffff',
//       textAlign: 'center'
//   },
//   text:{
//     color:'#c0c0c0',
//     fontWeight:'bold'
// },
// forgotpasstxt:{
//   color:'#c0c0c0',
//   fontWeight:'bold'
// },
// svgCurvefooter:{
//   position: 'absolute',
//   width:  Dimensions.get('window').width,
// },
})