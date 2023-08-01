import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { TabSeparator } from "../components/TabSeparator";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={13} style={styles.penIcon} {...props} />;
}

export default function Avatar() {
  return (
    <View style={styles.macroContainer}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={{width:"80%", justifyContent:"center"}}>
            <Image
              source={
                "https://i0.wp.com/fthghana.net/wp-content/uploads/2022/12/whatsapp-avatar-delete.jpeg?fit=1024%2C576&ssl=1"
              }
            ></Image>
          </View>
        </View>
        <View style={{ marginLeft: "4%", marginTop: "4%" }}>
          <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}>
            Avatars
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Say more with Avatars now on Whatsapp
          </Text>
        </View>
      </View>
      {/* Create Avatar */}
      <View style={styles.createContainer}>
        <View style={styles.createSubContainer}>
          <View style={{ margin: "3%", paddingLeft: "1%" }}>
            <Text style={{ fontSize: 15, color: "#0140dc" }}>
              Create Your Avatar
            </Text>
          </View>
        </View>
      </View>
      {/* Learn More */}
      <View style={styles.learnContainer}>
        <View style={styles.learnSubContainer}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: 18,
            }}
          >
            <View style={{ alignSelf: "center" }}>
              <Text style={{ fontSize: 15, color: "black" }}>Learn More</Text>
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
  macroContainer: {
    height: "100%",
    backgroundColor: "lightgray",
    width: "100%",
  },
  container: {
    width: "90%",
    height: "35%",
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "5%",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop:"5%"
  },
  createContainer: {
    marginTop: "10%",
    width: "90%",
    height: "8%",
    borderRadius: 10,
    alignSelf: "center",
  },
  createSubContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  learnContainer: {
    display: "flex",
    marginTop: "5%",
    width: "90%",
    height: "5%",
    borderRadius: 10,
    alignSelf: "center",
  },
  learnSubContainer: {
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
    resizeMode: "cover",
  },
  penIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});
