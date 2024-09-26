import React from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { useGlobalStyles } from "../../../../Components/GlobalStyles/GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

export default function SearchDetailsPage() {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <View style={styleSheet.container}>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <View style={styleSheet.searchBarContainer}>
          <FontAwesome size={18} name="search" color={"white"} />
          <TextInput
            style={{ color: "white", width: "90%" }}
            placeholderTextColor={"#909090"}
            placeholder="Search"
          />
        </View>
      </View>
      {/* trending searches */}

      <View style={{ paddingLeft: 10 }}>
        <ScrollView horizontal={true}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              height: 40,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((id) => {
              return (
                <View key={id}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      minWidth: 100,
                      backgroundColor: "#69696980",
                      padding: 10,
                      borderRadius: 4,
                    }}
                  >
                    <Feather name="trending-up" size={18} color="white" />
                    <Text
                      style={{
                        ...globalStyles.text,
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Test
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* recent searches */}
      <View style={{ display: "flex" }}>
        <View>
          <ScrollView style={{ paddingLeft: 15 }} horizontal={false}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                paddingBottom: 15,
              }}
            >
              <View>
                <Text style={{ ...globalStyles.text, color: "yellow" }}>
                  Recents
                </Text>
              </View>
              <View>
                <Text style={{ ...globalStyles.text, color: "yellow" }}>
                  See All
                </Text>
              </View>
            </View>
            <View style={{ display: "flex", gap: 5 }}>
              {[
                1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              ].map((id) => {
                return (
                  <View
                    key={id}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 10,
                      gap: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        borderRadius: 100,
                        width: 60,
                        height: 60,
                      }}
                    ></View>
                    <View style={{ display: "flex", gap: 2 }}>
                      <Text style={{ ...globalStyles.text, color: "white" }}>
                        PumaIndia
                      </Text>
                      <Text style={{ ...globalStyles.text, color: "white" }}>
                        Puma India
                      </Text>
                      <Text style={{ ...globalStyles.text, color: "white" }}>
                        1.3 M Followers
                      </Text>
                    </View>
                    <View style={{ marginLeft: "auto", paddingRight: 2 }}>
                      X
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    color: "white",
    gap: 10,
  },
  searchBarContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#303030",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 5,
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 15,
    borderColor: "yellow",
    borderWidth: 1,
  },
});
