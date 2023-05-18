import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import WavyHeader from '../Components/WavyHeader';
import WavyFooter from '../Components/WavyFooter';
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
} from '../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChangePassword = ({navigation}) => {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [cnewpassword, setCNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handlePasswordChange = () => {
    if (oldpassword == '' || newpassword == '' || cnewpassword == '') {
      alert('Please fill all the feilds');
    } else if (newpassword !== cnewpassword) {
      alert('New Password and confirm new password must be same');
    } else {
      setLoading(true);
      AsyncStorage.getItem('user').then(data => {
        fetch(`http://10.0.2.2:3000/changepassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + JSON.parse(data).token,
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            oldpassword: oldpassword,
            newpassword: newpassword,
          }),
        })
          .then(res => res.json())
          .then(data => {
            console.log('Response', data);
            if (data.message == 'Password Changed Successfully') {
              setLoading(false);
              alert(data.message);
              AsyncStorage.removeItem('user');
              navigation.navigate('Login');
            } else {
              setLoading(false);
              alert('Wrong Password');
            }
          });
      });
    }
  };
  return (
    <View style={container}>
      <WavyHeader customStyles={svgCurve} />
      <View style={headerContainer}>
        <TouchableOpacity
          style={goback}
          onPress={() => navigation.navigate('Settings1')}>
          <Ionicons name="arrow-back" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={headerText}>WEChat</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 140,
          marginHorizontal: 25,
        }}>
        <Text style={text}>Choose a Strong Password</Text>
        <TextInput
          style={textInput}
          secureTextEntry
          placeholder="Enter Old Password"
          onChangeText={text => setOldPassword(text)}
        />
        <TextInput
          style={textInput}
          secureTextEntry
          placeholder="Enter New Password"
          onChangeText={text => setNewPassword(text)}
        />
        <TextInput
          style={textInput}
          secureTextEntry
          placeholder="Confirm New Password"
          onChangeText={text => setCNewPassword(text)}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity
            style={button}
            onPress={() => handlePasswordChange()}>
            <Text style={buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={svgCurvefooter} />
    </View>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({});
