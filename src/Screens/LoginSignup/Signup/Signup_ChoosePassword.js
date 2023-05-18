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
  goback,
  headerContainer,
  textInput,
  button,
  buttonText,
  text,
  svgCurvefooter,
} from '../../../CommonCss/pagecss';
const Signup_ChoosePassword = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {email, username} = route.params;
  const handlePassword = () => {
    if (password == '' || confirmpassword == '') {
      alert('Please enter password');
    } else if (password != confirmpassword) {
      alert('Password does not match');
    } else {
      setLoading(true);
      fetch(`http://10.0.2.2:3000/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('Response', data);
          if (data.message === 'User Registered successfully') {
            setLoading(false);
            alert(data.message);
            navigation.navigate('Login');
          } else {
            setLoading(false);
            alert('Please try again');
          }
        });
    }
    //navigation.navigate('Signup_Accountcreated')
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
          onChangeText={text => setConfirmpassword(text)}
        />
        <TouchableOpacity style={button} onPress={() => handlePassword()}>
          <Text style={buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 10}]} />
    </View>
  );
};
export default Signup_ChoosePassword;

const styles = StyleSheet.create({});
