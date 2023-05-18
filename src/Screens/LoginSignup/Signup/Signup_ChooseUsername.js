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
  headerContainer,
  goback,
  textInput,
  button,
  buttonText,
  text,
  svgCurvefooter,
} from '../../../CommonCss/pagecss';
const Signup_EnterUseremail = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const {email} = route.params;
  const handleUsername = () => {
    if (username == '') {
      alert('Please enter username');
    } else {
      fetch(`http://10.0.2.2:3000/changeusername`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: username,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('Response', data);
          if (data.message == 'Username Available') {
            setLoading(false);
            alert('Username has been set successfully');
            navigation.navigate('Signup_ChoosePassword', {
              email: email,
              username: username,
            });
          } else {
            setLoading(false);
            alert('Username not available');
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
        <Text style={text}>Choose a Username</Text>
        <TextInput
          style={textInput}
          placeholder="Enter a username"
          onChangeText={text => setUsername(text)}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity style={button} onPress={() => handleUsername()}>
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
