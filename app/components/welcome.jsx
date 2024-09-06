import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useGlobalStyles } from '../GlobalStyles/GlobalStyles';

const Welcome = () => {
  const [globalStyles, loaded] = useGlobalStyles();
  if (!loaded) {
    return <Text>loading ..</Text>;
  }

  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.greetingContainer}>
        <Text
          style={{
            ...globalStyles.text,
            fontWeight: '600',
            fontSize: 20,
            color: 'white',
          }}
        >
          Hey! Welcome{' '}
        </Text>
        <Text
          style={{
            ...globalStyles.text,
            textAlign: 'center',
            paddingTop: 0,
            color: 'white',
          }}
        >
          We deliver on-demand organic fresh fruits directly from your nearby
          farms
        </Text>

        <View style={styleSheet.createAccountContainer}>
          <TouchableOpacity
            style={styleSheet.createAccountContainer.createAccountBtn}
          >
            <Text
              style={{ ...globalStyles.text, fontWeight: '600', fontSize: 18 }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleSheet.createAccountContainer.createAccountBtn}
          >
            <Text
              style={{ ...globalStyles.text, fontWeight: '600', fontSize: 18 }}
            >
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    height: '100%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    backgroundColor: 'black',
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },

  greetingContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
    marginTop: 20,
    padding: 10,
  },

  createAccountContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
    gap: 20,

    createAccountBtn: {
      padding: 15,
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'black',
    },
  },
});

export default Welcome;
