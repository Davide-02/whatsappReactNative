import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import chatImage1 from '../../assets/images/io2.jpg';

interface Chat {
  id: string;
  name: string;
  image: string;
  text: string;
}

const chatData: Chat[] = [
  {
    id: "1",
    name: "Davide Scalone",
    image: "https://www.chedonna.it/wp-content/uploads/2020/01/visage2.jpg",
    text: "Sono proprio io",
  },
  {
    id: "2",
    name: "Socio d'affari",
    image:
      "https://thumbs.dreamstime.com/b/persona-che-pensa-suo-parere-un-altra-idea-avere-qualche-dubbio-viso-barbuto-dell-ippopotamo-non-sicuro-di-colore-giallo-uomo-193661454.jpg",
    text: "Abbiamo fatto i milioni!!",
  },
  {
    id: "3",
    name: "Maurizio Calcetto",
    image:
      "https://img.freepik.com/premium-photo/portrait-serious-black-man-with-skincare-cosmetics-dermatology-against-grey-studio-background-face-male-person-model-with-beauty-salon-treatment-luxury-with-grooming-routine_590464-173812.jpg",
    text: "Quando la prossima partita??",
  },
  // Aggiungi altre chat qui
];

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={styles.penIcon} {...props} />;
}

export default function Index() {
  const ChatItem = ({ item }: { item: Chat }) => {
    const navigation = useNavigation();

    const onPressChatItem = (chatData: any) => {
      navigation.navigate("ChatScreen" as never, {chatData});
    };

    return (
      <View style={styles.chatItemWrapper}>
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => onPressChatItem(item)}
        >
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.image }} style={styles.chatImage} />
          </View>
          <View style={[styles.chatContainer, { flexShrink: 1 }]}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        </TouchableOpacity>
        <View
          style={styles.innerSeparator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
  };

  const renderChatItem = ({ item }: { item: Chat }) => <ChatItem item={item} />;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={styles.edit}>Edit</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TabBarIcon name="camera" color="#0140dc" />
          <TabBarIcon name="pencil" color="#0140dc" />
        </View>
      </View>

      <Text style={styles.title}>Chats</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={styles.broadcastList}>Broadcast Lists</Text>
        <Text style={styles.newGroup}>New Group</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
      />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
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
  navigationBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    // alignContent: 'flex-end'
  },
  separator: {
    marginVertical: 2,
    height: 1,
    width: "100%",
  },
  innerSeparator: {
    marginVertical: 4,
    height: 1,
    width: Dimensions.get("window").width,
    marginLeft: 60,
  },
  edit: {
    fontSize: 15,
    fontWeight: "400",
    color: "#0140dc",
    textAlign: "left",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  broadcastList: {
    fontSize: 15,
    fontWeight: "400",
    color: "#0140dc",
    textAlign: "left",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  newGroup: {
    fontSize: 15,
    fontWeight: "400",
    color: "#0140dc",
    textAlign: "right",
    marginRight: 15,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
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
  chatContainer: {
    flexDirection: "column",
    flexShrink: 1,
  },
  chatItemWrapper: {
    flex: 1,
    width: "100%",
  },
  cameraIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
  penIcon: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});
