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
import {
  container,
  svgCurve,
  headerText,
  headerContainer,
  textInput,
  button,
  buttonText,
  text,
  svgCurvefooter,
  goback,
} from '../../../CommonCss/pagecss';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Signup_EnterUseremail = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    console.log('Inner HandleSubmit');
    //setLoading(true);
    //  navigation.navigate('Signup_EnterVeirificationCode')
    if (email == '') {
      alert('Please enter email');
    } else {
      setLoading(true);
      fetch(`http://10.0.2.2:3000/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(res => res.json())
        .then(data => {
          // console.log('Response', data);
          if (data.error == 'Invalid credentials') {
            alert('Invalid credentials');
            setLoading(false);
          } else if (data.message == 'Verification Code Sent to your Email') {
            setLoading(false);
            alert(data.message);
            navigation.navigate('Signup_EnterVeirificationCode', {
              useremail: data.email,
              userVerificationCode: data.verificationCode,
            });
          }
        });
      // });
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
        <Text style={text}>Create a new account</Text>
        <TextInput
          style={textInput}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color={'white'} />
        ) : (
          <TouchableOpacity style={button} onPress={() => handleSubmit()}>
            <Text style={buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 50}]} />
    </View>
  );
};

export default Signup_EnterUseremail;

const styles = StyleSheet.create({});
