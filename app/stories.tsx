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

export default function Stories() {
  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
    onPress?: () => void;
  }) {
    return <FontAwesome size={20} style={styles.penIcon} {...props} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Status</Text>
      <View
        style={[
          styles.chatItemWrapper,
          { display: "flex", justifyContent: "space-between" },
        ]}
      >
        <TouchableOpacity style={styles.chatItem2}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View style={styles.imageWrapper}>
                <Image
                  source={{
                    uri: "https://www.chedonna.it/wp-content/uploads/2020/01/visage2.jpg",
                  }}
                  style={styles.chatImage}
                />
              </View>

              <View style={styles.chatContainer}>
                <Text style={styles.chatName}>My status</Text>
                <Text style={styles.chatText}>Add to my status</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TabBarIcon name="camera" color="#0140dc" />
              <TabBarIcon name="pencil" color="#0140dc" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TabSeparator />
      <TouchableOpacity style={{ padding: 20, backgroundColor: "#D2D2D2" }}>
        <Text> VIEWED UPDATES</Text>
      </TouchableOpacity>

      <View style={styles.chatItemWrapper}>
        <TouchableOpacity style={styles.chatItem}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://www.chedonna.it/wp-content/uploads/2020/01/visage2.jpg",
              }}
              style={styles.chatImage}
            />
          </View>
          <View style={[styles.chatContainer, { flexShrink: 1 }]}>
            <Text style={styles.chatName}>Davide</Text>
            <Text style={styles.chatText}>Descrizione</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.chatItemWrapper}>
        <TouchableOpacity style={styles.chatItem}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg",
              }}
              style={styles.chatImage}
            />
          </View>
          <View style={[styles.chatContainer, { flexShrink: 1 }]}>
            <Text style={styles.chatName}>Davide</Text>
            <Text style={styles.chatText}>Descrizione</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.chatItemWrapper}>
        <TouchableOpacity style={styles.chatItem}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg",
              }}
              style={styles.chatImage}
            />
          </View>
          <View style={[styles.chatContainer, { flexShrink: 1 }]}>
            <Text style={styles.chatName}>Davide</Text>
            <Text style={styles.chatText}>Descrizione</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.chatItemWrapper}>
        <TouchableOpacity style={styles.chatItem}>
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/640px-Black_colour.jpg",
              }}
              style={styles.chatImage}
            />
          </View>
          <View style={[styles.chatContainer, { flexShrink: 1 }]}>
            <Text style={styles.chatName}>Davide</Text>
            <Text style={styles.chatText}>Descrizione</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TabSeparator />
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
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
  },
  chatItemWrapper: {
    width: "100%",
  },
  chatItem2: {
    backgroundColor: "white",
    padding: 15,
    width: "100%",
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
    width: 50,
    height: 50,
    borderRadius: 80,
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
