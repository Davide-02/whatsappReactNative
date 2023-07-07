import { FlatList, StyleSheet, Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
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
    text: "Prova",
  },
  { id: "2", name: "Chat 2", image: "url_to_image_1", text: "Prova" },
  { id: "3", name: "Chat 3", image: "url_to_image_1", text: "Prova" },
  // Aggiungi altre chat qui
];

export default function TabOneScreen() {
  const renderChatItem = ({ item }: { item: Chat }) => (
    <View style={styles.chatItem}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.chatImage} />
      </View>
      <View style={styles.chatContainer}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.chatText}>{item.text}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.edit}>Edit</Text>
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
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  edit: {
    fontSize: 15,
    fontWeight: "400",
    color: "blue",
    textAlign: "left",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  broadcastList: {
    fontSize: 15,
    fontWeight: "400",
    color: "blue",
    textAlign: "left",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
  newGroup: {
    fontSize: 15,
    fontWeight: "400",
    color: "blue",
    textAlign: "right",
    marginRight: 15,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
  chatContainer:{
    flexDirection: 'column'
  }
});
