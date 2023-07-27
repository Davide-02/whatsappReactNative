import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import { RadioButton } from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import EditBottomBar from "../../components/EditBottomBar";
// import chatImage1 from '../../assets/images/io2.jpg';

interface Chat {
  id: string;
  name: string;
  image: string;
  text: string;
}

const chatData: any[] = [
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
  const [selectedChatList, setSelectedChatList] = useState<any[]>([]);

  function selectedChat(chatData: any) {
    setSelectedChatList((prevList) => {
      // Controlla se l'ID della chat è già presente nell'array
      const chatIndex = prevList.findIndex((chat) => chat.id === chatData.id);

      if (chatIndex !== -1) {
        // Se l'ID è già presente, rimuovi la chat dall'array
        const newList = [...prevList];
        newList.splice(chatIndex, 1);
        return newList;
      } else {
        // Se l'ID non è presente, aggiungi la chat all'array
        return [...prevList, chatData];
      }
    });
  }

  const ChatItem = ({ item }: { item: Chat }) => {
    const navigation = useNavigation();

    const onPressChatItem = (chatData: any) => {
      navigation.navigate("ChatScreen" as never, { chatData });
    };
    const isChecked = selectedChatList.some((chat) => chat.id === item.id);

    return (
      <View style={styles.chatItemWrapper}>
        {editMode ? (
          <View style={styles.chatItemWrapperEdit}>
            <View
              style={{
                marginLeft: 15,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <RadioButton
                value={item.id}
                color="blue"
                status={isChecked ? "checked" : "unchecked"}
                onPress={() => selectedChat(item)}
              />
              <TouchableOpacity style={[styles.chatItem, { marginLeft: 15 }]}>
                <View style={styles.imageWrapper}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.chatImage}
                  />
                </View>
                <View style={[styles.chatContainer, { flexShrink: 1 }]}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatText}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={styles.innerSeparator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
          </View>
        ) : (
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
        )}
      </View>
    );
  };

  const [editMode, setEditMode] = useState(false);

  function editModes() {
    setSelectedChatList([])
    setEditMode(!editMode);
  }

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
        {editMode ? (
          <TouchableOpacity onPress={editModes}>
            <Text style={styles.edit}>Done</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TouchableOpacity onPress={editModes}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TabBarIcon name="camera" color="#0140dc" />
              <TabBarIcon name="pencil" color="#0140dc" />
            </View>
          </View>
        )}
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
        <Text
          style={
            editMode
              ? [styles.broadcastList, { color: "gray" }]
              : styles.broadcastList
          }
        >
          Broadcast Lists
        </Text>
        <Text
          style={
            editMode ? [styles.newGroup, { color: "gray" }] : styles.newGroup
          }
        >
          New Group
        </Text>
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
      {editMode ? (
        <View style={{ width: "100%" }}>
          <EditBottomBar disabled={selectedChatList.length > 0} />
        </View>
      ) : null}
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
  chatItemWrapperEdit: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
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
