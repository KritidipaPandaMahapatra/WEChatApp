import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import WavyHeader from '../../../Components/WavyHeader'
import WavyFooter from '../../../Components/WavyFooter'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { container, svgCurve, headerText,headerContainer,goback,textInput, button, buttonText,text,svgCurvefooter} from '../../../CommonCss/pagecss'
const Signup_EnterUseremail = ({navigation}) => {
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
     <Text style={text}>Choose a Username</Text>
     <TextInput style={textInput} placeholder="Enter a username"/>
     <TouchableOpacity style={button} onPress={() => navigation.navigate('Signup_ChoosePassword')}>
           <Text style={buttonText}>Next</Text>
       </TouchableOpacity>
     </View>
    <WavyFooter customStyles={[svgCurvefooter,{marginTop:50}]} />
   </View>                    
  )
}

export default Signup_EnterUseremail

const styles = StyleSheet.create({})