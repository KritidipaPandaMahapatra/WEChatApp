import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import WavyHeader from '../../../Components/WavyHeader';
import WavyFooter from '../../../Components/WavyFooter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  container,
  svgCurve,
  headerText,
  headerContainer,
  textInput,
  button,
  buttonText,
  formHead,
  svgCurvefooter,
  goback,
} from '../../../CommonCss/pagecss';
const Signup_EnterVeirificationCode = ({navigation, route}) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const {useremail, userVerificationCode} = route.params;
  //console.log(useremail, userVerificationCode);
  const handleVerificationCode = () => {
    if (verificationCode != userVerificationCode) {
      alert('Invalid Verification Code');
    } else if (verificationCode == userVerificationCode) {
      alert('VERIFICATION CODE MATCHED');
      navigation.navigate('Signup_ChooseUsername', {email: useremail});
    } else {
      alert('Please Try Again');
    }
    // navigation.navigate('Signup_ChooseUsername')
  };
  return (
    <View style={container}>
      <WavyHeader customStyles={svgCurve} />
      <View style={headerContainer}>
        <TouchableOpacity
          style={goback}
          onPress={() => navigation.navigate('Login')}>
          <Ionicons name="arrow-back" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={headerText}>WEChat</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 220,
          marginHorizontal: 25,
        }}>
        <Text style={formHead}>
          A verification code has been sent to your email
        </Text>
        <TextInput
          style={textInput}
          placeholder="Enter 6-digit code here"
          onChangeText={text => setVerificationCode(text)}
        />
        <TouchableOpacity
          style={button}
          onPress={() => handleVerificationCode()}>
          <Text style={buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 50}]} />
    </View>
  );
};

export default Signup_EnterVeirificationCode;

const styles = StyleSheet.create({});
