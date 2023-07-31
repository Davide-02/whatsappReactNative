import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TabSeparator } from "../components/TabSeparator";
import { useNavigation } from "expo-router";

export default function Settings() {
  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
    onPress?: () => void;
  }) {
    return <FontAwesome size={12} style={styles.penIcon} {...props} />;
  }
  const navigation = useNavigation();

  const onPressEditProfile = () => {
    navigation.navigate("Edit Profile" as never);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.chatItem} onPress={onPressEditProfile}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://www.chedonna.it/wp-content/uploads/2020/01/visage2.jpg",
              }}
              style={styles.chatImage}
            />
          </View>
          <View style={styles.chatContainer}>
            <Text style={styles.chatName}>Davide</Text>
            <Text style={styles.chatText}>Descrizione</Text>
          </View>
        </TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="people-circle" size={24} color="blue" />
            <Text style={styles.optionText}>Avatar</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: "#D2D2D2" }}
        ></TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="star" size={24} color="yellow" />
            <Text style={styles.optionText}>Starred Messages</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>

        <TabSeparator />

        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="logo-chrome" size={24} color="green" />
            <Text style={styles.optionText}>Linked Devices</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 20, backgroundColor: "#D2D2D2" }}
        ></TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-key" size={24} color="blue" />
            <Text style={styles.optionText}>Account</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-lock-closed" size={24} color="#007fff" />
            <Text style={styles.optionText}>Privacy</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-logo-whatsapp" size={24} color="green" />
            <Text style={styles.optionText}>Chats</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-notifications" size={24} color="red" />
            <Text style={styles.optionText}>Notifications</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-swap-vertical" size={24} color="green" />
            <Text style={styles.optionText}>Storage and Data</Text>
          </View>
          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: "#D2D2D2" }}
        ></TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="ios-help-circle-outline" size={24} color="blue" />
            <Text style={styles.optionText}>Help</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
        <TabSeparator />
        <TouchableOpacity style={styles.optionContainer}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="heart" size={24} color="red" />
            <Text style={styles.optionText}>Tell a Friend</Text>
          </View>

          <TabBarIcon name="chevron-right" color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2D2D2",
    paddingVertical: 20,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionContainer: {
    paddingHorizontal: 16,
    padding: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
  },
  chatItemWrapper: {
    width: "100%",
  },
  sectionContainer: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
  },
  chatItem: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  chatContainer: {
    flexDirection: "column",
    flexShrink: 1,
  },
  imageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  chatImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  chatName: {
    fontSize: 18,
    fontWeight: "500",
  },
  chatText: {
    fontSize: 14,
    fontWeight: "normal",
  },
  penIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});
