import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
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
const ForgotPassword_EnterVerificationcode = ({navigation, route}) => {
  const {useremail, userVerificationCode} = route.params;
  const [verificationCode, setVerificationCode] = React.useState('');
  const handleVerificationcode = () => {
    //navigation.navigate('ForgotPassword_ChoosePassword')
    if (verificationCode != userVerificationCode) {
      alert('Invalid verification code');
    } else {
      alert('Verification code Matched');
      navigation.navigate('ForgotPassword_ChoosePassword', {email: useremail});
    }
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
          onPress={() => handleVerificationcode()}>
          <Text style={buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 50}]} />
    </View>
  );
};

export default ForgotPassword_EnterVerificationcode;

const styles = StyleSheet.create({});
