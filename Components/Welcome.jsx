import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useGlobalStyles } from "./GlobalStyles/GlobalStyles";
import { CustomButton } from "./CustomButton/CustomButton";

const Welcome = ({ setRenderSection, setPopOverVisible }) => {
  const [globalStyles, loaded] = useGlobalStyles();
  if (!loaded) {
    return <Text>loading ..</Text>;
  }
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.revenueContainer}>
        <Text
          style={{ ...globalStyles.textBold, color: "white", fontSize: 36 }}
        >
          ₹9,999.00 /-
        </Text>
        <Text
          style={{
            ...globalStyles.text,
            color: "white",
            fontSize: 18,
          }}
        >
          Revenue shared in the past hour .
        </Text>
      </View>
      <View style={styleSheet.greetingContainer}>
        <View style={styleSheet.createAccountContainer}>
          <CustomButton
            buttonText={"Get Started"}
            onPress={() => setPopOverVisible(true)}
          />
          <CustomButton
            secondary
            buttonText={"have an account ?"}
            onPress={() => setPopOverVisible(true)}
          />
        </View>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  revenueContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    height: "100%",
    padding: 15,
    display: "flex",
    flexDirection: "column",
    color: "white",
    backgroundColor: "black",
    // justifyContent: 'flex-end',
    justifyContent: "center",
    alignItems: "center",
  },

  greetingContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
    marginTop: 20,
    padding: 10,
  },

  createAccountContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
    gap: 20,

    createAccountBtn: {
      padding: 15,
      width: "100%",
      borderRadius: 10,
      backgroundColor: "#F5F5F5",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      color: "black",
    },
  },
});

export default Welcome;
