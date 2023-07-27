import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TabSeparator } from "../components/TabSeparator";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={13} style={styles.penIcon} {...props} />;
}

export default function EditProfile() {
  return (
    <View style={styles.macroContainer}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View>
            <View style={styles.imageWrapper}>
              <img
                style={styles.chatImage}
                src={
                  "https://www.chedonna.it/wp-content/uploads/2020/01/visage2.jpg"
                }
              />
            </View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "#0140dc",
                }}
              >
                Edit{" "}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: "8%", marginLeft: "5%" }}>
            <Text style={{ maxWidth: "80%", color: "gray" }}>
              Enter your name and add an optional profile picture
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "4%", marginTop: "4%" }}>
          <TabSeparator />
          <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}>
            Davide
          </Text>
          <TabSeparator />
        </View>
      </View>
      {/* PHONE NUMBER */}

      <View style={styles.phoneContainer}>
        <Text
          style={{
            fontSize: 13,
            color: "gray",
            paddingLeft: 18,
            marginBottom: 8,
          }}
        >
          PHONE NUMBER
        </Text>
        <View style={styles.phoneSubContainer}>
          <View style={{ margin: "3%" }}>
            <Text style={{ fontSize: 15, color: "black" }}>+39 3342048806</Text>
          </View>
        </View>
      </View>
      {/* About */}
      <View style={styles.aboutContainer}>
        <Text
          style={{
            fontSize: 13,
            color: "gray",
            paddingLeft: 18,
            marginBottom: 8,
          }}
        >
          ABOUT
        </Text>
        <View style={styles.aboutSubContainer}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection:"row",
              paddingLeft: 18,

            }}
          >
            <View style={{alignSelf:"center"}}>
              <Text style={{ fontSize: 15, color: "black"}}>Stato</Text>
            </View>
            <View>
              <TabBarIcon name="chevron-right" color="gray" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  macroContainer: { height: "100%", backgroundColor: "lightgray", width: "100%" },
  container: {
    width: "90%",
    height: "22%",
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
    marginTop:"5%"
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: "5%",
  },
  phoneContainer: {
    marginTop: "5%",
    width: "90%",
    height: "8%",
    borderRadius: 10,
    alignSelf: "center",
  },
  phoneSubContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  aboutContainer: {
    display: "flex",
    marginTop: "5%",
    width: "90%",
    height: "5%",
    borderRadius: 10,
    alignSelf: "center",
  },
  aboutSubContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 20,
  },
  chatImage: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  penIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});
