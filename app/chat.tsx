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
}) {
  return <FontAwesome size={18} style={styles.penIcon} {...props} />;
}

export default function Chat() {
  const navigation = useNavigation();
  const route = useRoute();

  const chatName = route.params?.chatName?.name || "";
  const chatImage = route.params?.chatName?.image || "";

  return (
    <View style={styles.container}>
      <View style={styles.chatItemWrapper}>
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.leftContainer}>
            <TabBarIcon name="chevron-left" color="#0140dc" />
            <View style={styles.imageWrapper}>
              <Image source={chatImage} style={styles.chatImage} />
            </View>
            <View style={styles.chatContainer}>
              <Text style={styles.chatName}>{chatName}</Text>
            </View>
          </View>
        </TouchableOpacity>

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
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  penIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});

