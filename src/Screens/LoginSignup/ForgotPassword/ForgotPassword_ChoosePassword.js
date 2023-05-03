import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import WavyHeader from '../../../Components/WavyHeader'
import WavyFooter from '../../../Components/WavyFooter'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { container, svgCurve, headerText,goback,headerContainer,textInput, button, buttonText,text,svgCurvefooter} from '../../../CommonCss/pagecss'
const ForgotPassword_ChoosePassword = ({navigation}) => {
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
   <View style={{justifyContent:'center',alignItems:'center',marginTop:190,marginHorizontal:25}}>
     <Text style={text}>Choose a Strong Password</Text>
     <TextInput style={textInput} secureTextEntry placeholder="Enter Password"/>
     <TextInput style={textInput} secureTextEntry placeholder="Confirm Password"/>
     <TouchableOpacity style={button} onPress={() => navigation.navigate('ForgotPassword_AccountRecoverd')}>
           <Text style={buttonText}>Next</Text>
       </TouchableOpacity>
     </View>
    <WavyFooter customStyles={[svgCurvefooter,{marginTop:10}]} />
   </View>                    
  )
}
export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})