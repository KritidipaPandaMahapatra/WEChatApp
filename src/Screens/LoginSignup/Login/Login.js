import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import WavyHeader from '../../../Components/WavyHeader';
import WavyFooter from '../../../Components/WavyFooter';
import {
  container,
  svgCurve,
  loginheaderText,
  headerContainer,
  welcometxt,
  textInput,
  button,
  buttonText,
  text,
  forgotpasstxt,
  svgCurvefooter,
} from '../../../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import LottieView from 'lottie-react-native';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    // navigation.navigate('MainPage')
    if (email == '' || password == '') {
      alert('Please Enter Email & Password');
    } else {
      setLoading(true);
      fetch(`http://10.0.2.2:3000/signin`, {
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
        .then(async data => {
          console.log('Response', data);
          if (data.message == 'Successfully signed in') {
            setLoading(false);
            await AsyncStorage.setItem('user', JSON.stringify(data));
            navigation.navigate('MainPage', {
              data,
            });
          } else {
            setLoading(false);
            alert(data.error);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  return (
    <View style={container}>
      <WavyHeader customStyles={svgCurve} />
      <View style={headerContainer}>
        {/* <View style={{height: 140, width: 140}}>
    <LottieView source={require('../../../../vV8FHdXBAO.json')} autoPlay loop />
     </View> */}
        <Text style={loginheaderText}>WEChat</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 130,
          marginHorizontal: 25,
        }}>
        <View style={{marginRight: 200}}>
          <Text style={welcometxt}>Welcome!</Text>
        </View>
        <TextInput
          style={textInput}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={textInput}
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <TouchableOpacity style={button} onPress={() => handleLogin()}>
            <Text style={buttonText}>Login</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('Forgotpassword_Enteremail')}>
          <Text style={[text, {marginBottom: 15, marginTop: 10}]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={text}>Don't have an account?</Text>
          <Text
            style={[text, {color: '#4682b4'}]}
            onPress={() => navigation.navigate('Signup_EnterEmail')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <WavyFooter customStyles={svgCurvefooter} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
