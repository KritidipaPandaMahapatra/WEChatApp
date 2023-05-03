// In App.js in a new project

import * as React from 'react';
import { View, Text ,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_EnterUseremail from './src/Screens/LoginSignup/Signup/Signup_EnterUseremail';
import Signup_EnterVeirificationCode from './src/Screens/LoginSignup/Signup/Signup_EnterVeirificationCode';
import Signup_ChooseUsername from './src/Screens/LoginSignup/Signup/Signup_ChooseUsername'
import Signup_ChoosePassword from './src/Screens/LoginSignup/Signup/Signup_ChoosePassword'
import Signup_Accountcreated from './src/Screens/LoginSignup/Signup/Signup_Accountcreated'
import ForgotPassword_AccountRecoverd from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_AccountRecoverd'
import ForgotPassword_ChoosePassword from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword'
import Forgotpassword_Enteremail from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail'
import ForgotPassword_EnterVerificationcode from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerificationcode'
import MainPage from './src/Screens/Mainpage/MainPage';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterUseremail} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup_EnterVeirificationCode" component={Signup_EnterVeirificationCode} options={{ headerShown: false }} />
        <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} options={{ headerShown: false }} />
        <Stack.Screen name="Signup_Accountcreated" component={Signup_Accountcreated} options={{ headerShown: false }} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} options={{ headerShown: false }} />

        <Stack.Screen name="ForgotPassword_AccountRecoverd" component={ForgotPassword_AccountRecoverd} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} options={{ headerShown: false }} />
        <Stack.Screen name="Forgotpassword_Enteremail" component={Forgotpassword_Enteremail} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword_EnterVerificationcode" component={ForgotPassword_EnterVerificationcode} options={{ headerShown: false }}/>

        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;