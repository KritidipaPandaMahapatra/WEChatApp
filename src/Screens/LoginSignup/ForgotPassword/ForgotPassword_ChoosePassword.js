import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import WavyHeader from '../../../Components/WavyHeader';
import WavyFooter from '../../../Components/WavyFooter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  container,
  svgCurve,
  headerText,
  goback,
  headerContainer,
  textInput,
  button,
  buttonText,
  text,
  svgCurvefooter,
} from '../../../CommonCss/pagecss';
const ForgotPassword_ChoosePassword = ({navigation, route}) => {
  const {email} = route.params;
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handlePassword = () => {
    if (password == '' || cpassword == '') {
      alert('Please enter password');
    } else if (password != cpassword) {
      alert('Password does not match');
    } else {
      setLoading(true);
      fetch(`http://10.0.2.2:3000/resetpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('Response', data);
          if (data.message === 'Password changed succesfully') {
            setLoading(false);
            alert(data.message);
            navigation.navigate('ForgotPassword_AccountRecoverd');
          } else {
            setLoading(false);
            alert('Something Went Wrong');
          }
        });
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
          marginTop: 190,
          marginHorizontal: 25,
        }}>
        <Text style={text}>Choose a Strong Password</Text>
        <TextInput
          style={textInput}
          secureTextEntry
          placeholder="Enter Password"
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={textInput}
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={text => setCPassword(text)}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity style={button} onPress={() => handlePassword()}>
            <Text style={buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 10}]} />
    </View>
  );
};
export default ForgotPassword_ChoosePassword;

const styles = StyleSheet.create({});
