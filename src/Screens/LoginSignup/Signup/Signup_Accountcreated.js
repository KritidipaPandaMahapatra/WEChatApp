import { StyleSheet, Text, View ,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import WavyHeader from '../../../Components/WavyHeader'
import WavyFooter from '../../../Components/WavyFooter'
import { container, svgCurve, headerText,headerContainer,goback,textInput, button, buttonText,text,svgCurvefooter} from '../../../CommonCss/pagecss'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Signup_Accountcreated= ({navigation}) => {
  return (
    <SafeAreaView style={container}>
    <WavyHeader customStyles={svgCurve} />
     <View style={headerContainer}>
     <TouchableOpacity  style={goback}
      onPress={()=>navigation.navigate('Login')}>
       <Ionicons name='arrow-back' size={35} color={'white'}/>
      </TouchableOpacity>
       <Text style={headerText}>WEChat</Text>
   </View>
   <View style={{justifyContent:'center',alignItems:'center',top:150}}>
    <View style={{height: 180, width: 180,marginBottom:50,marginTop:40}}>
    <LottieView source={require('../../../../lf20_hiwm02em.json')} autoPlay loop />
     </View>
     <Text style={text}>Account Created Successfully</Text>
     <TouchableOpacity style={button} onPress={() => navigation.navigate('Login')}>
           <Text style={buttonText}>Let's Roll</Text>
       </TouchableOpacity>
     </View>
    <WavyFooter customStyles={[svgCurvefooter,{marginTop:60}]} />
    </SafeAreaView>                  
  )
}
export default Signup_Accountcreated

const styles = StyleSheet.create({})
