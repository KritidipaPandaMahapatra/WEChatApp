import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import WavyHeader from '../../../Components/WavyHeader'
import WavyFooter from '../../../Components/WavyFooter'
import { container, svgCurve, headerText,headerContainer,textInput, button, buttonText,text,svgCurvefooter, goback} from '../../../CommonCss/pagecss'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Forgotpassword_Enteremail = ({navigation}) => {
  return (
    <View style={container}>
    <WavyHeader customStyles={svgCurve} />
     <View style={headerContainer}>
     <TouchableOpacity  style={goback}
      onPress={()=>navigation.navigate('Login')}>
       <Ionicons name='arrow-back' size={35} color={'white'}/>
      </TouchableOpacity>
       <Text style={headerText}>WEChat</Text>
   </View>
   <View style={{justifyContent:'center',alignItems:'center',marginTop:220,marginHorizontal:25}}>
     <Text style={text}>Verify Your Email</Text>
     <TextInput style={textInput} placeholder="Enter Email"/>
     <TouchableOpacity style={button} onPress={() => navigation.navigate('ForgotPassword_EnterVerificationcode')}>
           <Text style={buttonText}>Next</Text>
       </TouchableOpacity>
     </View>
    <WavyFooter customStyles={[svgCurvefooter,{marginTop:50}]} />     
   </View>              
  )
}

export default Forgotpassword_Enteremail

const styles = StyleSheet.create({})