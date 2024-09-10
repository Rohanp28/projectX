import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useGlobalStyles } from './GlobalStyles/GlobalStyles';
import SignUp from '../Components/SingupComponent';
import RegionSeprator from '../Components/RegionSepratorComponent';
import { SocialSign } from '../Components/SocialSignInComponent';
import { LoginForm } from '../Components/LoginFormComponent';
import Welcome from './components/welcome';

export default function App() {
  const [globalStyles, loaded] = useGlobalStyles();
  if (!loaded) {
    return <Text>loading ..</Text>;
  }
  return (
    <Welcome />
    // <SafeAreaView>
    //   <View style={styleSheet.container}>
    //     <View>
    //       <Text
    //         style={{
    //           color: 'white',
    //           textAlign: 'center',
    //           fontWeight: 600,
    //           ...globalStyles.text,
    //           fontSize: 32,
    //         }}
    //       >
    //         Project X
    //       </Text>
    //     </View>

    //     <View style={styleSheet.greetingSection}>
    //       <Text style={globalStyles.text}>Create an account</Text>
    //     </View>
    //     <View style={styleSheet.inputWrapper}>
    //       <TextInput
    //         placeholder="Enter your email"
    //         style={{ ...globalStyles.text, ...styleSheet.inputContainer }}
    //       />
    //       <TextInput
    //         placeholder="Create password"
    //         style={{ ...globalStyles.text, ...styleSheet.inputContainer }}
    //         secureTextEntry
    //       />
    //     </View>

    //     <View style={styleSheet.createAccountContainer}>
    //       <TouchableOpacity
    //         style={styleSheet.createAccountContainer.createAccountBtn}
    //       >
    //         <Text style={globalStyles.text}>Start scrolling</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View>
    //       <View
    //         style={{ backgroundColor: 'gray', height: 1, margin: 16 }}
    //       ></View>
    //     </View>

    //     <View style={styleSheet.signInContainer}>
    //       <TouchableOpacity
    //         style={styleSheet.signInContainer.signInContainerBtn}
    //       >
    //         <View style={styleSheet.signInBtn}>
    //           <Image
    //             source={require('../assets/svg/google.png')}
    //             style={styleSheet.socialIcons}
    //           />
    //           <Text style={{ ...globalStyles.text, fontSize: 16 }}>
    //             Continue with Google
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={styleSheet.signInContainer.signInContainerBtn}
    //       >
    //         <View style={styleSheet.signInBtn}>
    //           <Image
    //             source={require('../assets/svg/fb.png')}
    //             style={styleSheet.socialIcons}
    //           />
    //           <Text style={{ ...globalStyles.text, fontSize: 16 }}>
    //             Continue with Facebook
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={styleSheet.signInContainer.signInContainerBtn}
    //       >
    //         <View style={styleSheet.signInBtn}>
    //           <Image
    //             source={require('../assets/svg/apple.png')}
    //             style={styleSheet.socialIcons}
    //           />
    //           <Text
    //             style={{
    //               ...globalStyles.text,
    //               fontSize: 16,
    //               fontWeight: '600',
    //             }}
    //           >
    //             Continue with Apple
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    height: '100%',
    padding: 15,
    display: 'flex',
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  topHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  greetingSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
