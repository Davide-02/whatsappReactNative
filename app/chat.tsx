import {
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  onPress?: () => void;
}) {
  return <FontAwesome size={18} style={styles.penIcon} {...props} />;
}

export default function Chat() {
  const navigation = useNavigation();
  const route = useRoute();

  const chatName = route.params?.chatName?.name || "Non trovato";
  const chatImage =
    route.params?.chatName?.image ||
    "https://images.emojiterra.com/google/android-12l/512px/2753.png";

  return (
    <View style={styles.container}>
  <View style={styles.chatItemWrapper}>
    <View style={styles.chatItem}>
      <View style={styles.leftContainer}>
        <TabBarIcon
          name="chevron-left"
          color="#0140dc"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.imageWrapper}>
          <Image source={chatImage} style={styles.chatImage} />
        </View>
        <View style={styles.chatContainer}>
          <Text style={styles.chatName}>{chatName}</Text>
          <Text style={styles.chatStatus}>Online</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <TabBarIcon name="video-camera" color="#0140dc" />
          <TabBarIcon name="phone" color="#0140dc" />
        </View>
      </View>
    </View>

    <View
      style={styles.innerSeparator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  </View>
  {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  subContainer: {
    marginLeft: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // alignContent: 'flex-end'
  },
  chatName: {
    fontSize: 18,
    fontWeight: "500",
  },
  separator: {
    marginVertical: 1,
    height: 1,
    width: "80%",
  },
  innerSeparator: {
    marginVertical: 4,
    height: 1,
    width: Dimensions.get("window").width,
    marginLeft: 60,
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
  chatContainer: {
    flexDirection: "column",
  },
  chatItemWrapper: {
    flex: 1,
    width: "100%",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  chatStatus: {
    fontSize: 14,
    fontWeight: "normal",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },  
  penIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});
