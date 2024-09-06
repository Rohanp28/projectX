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
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'space-evenly',
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
  inputWrapper: {
    width: '100%',
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffff',
    width: '100%',
    borderRadius: 10,
    color: 'black',
    marginTop: 5,
    fontSize: 14,
  },
  createAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    createAccountBtn: {
      elevation: 10,
      padding: 15,
      width: '100%',
      borderRadius: 14,
      backgroundColor: '#F5F5F5',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'black',
    },
  },
  signInContainer: {
    display: 'flex',
    gap: 8,

    signInContainerBtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      //   elevation: 10,
    },
  },
  signInBtn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    minWidth: 200,
    alignItems: 'center',
  },
  socialIcons: {
    width: 24,
    height: 24,
  },
});
