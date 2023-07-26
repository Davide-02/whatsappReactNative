import {
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  onPress?: () => void;
}) {
  return <FontAwesome size={18} style={styles.penIcon} {...props} />;
}

function TextIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  onPress?: any;
}) {
  return <FontAwesome size={18} style={styles.textIcon} {...props} />;
}

type ChatScreenParams = {
  chatData: any;
};

type ChatScreenProps = {
  route: RouteProp<Record<any, ChatScreenParams>, "ChatScreen">;
};

export default function Chat({ route }: ChatScreenProps) {
  const navigation = useNavigation();
  const { chatData } = route.params;
  const chatName = chatData.name || "Non trovato";
  const chatImage =
    chatData.image ||
    "https://images.emojiterra.com/google/android-12l/512px/2753.png";

  const [hideCameraButton, setHideCameraButton] = useState(false);
  const [hideAudioButton, setHideAudioButton] = useState(false);
  const [hideSendButton, setHideSendButton] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const TabSeparator = () => <View style={styles.tabSeparator} />;

  const TabSeparatorTransparent = () => (
    <View style={styles.tabSeparatorTransparent} />
  );

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const TabItem = ({
    title,
    icon,
    onPress,
  }: {
    title: string;
    icon?: any;
    onPress?: () => void;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={title == "Cancel" ? styles.cancelText : styles.tabItem}>
        <TextIcon name={icon} color="#0140dc" />
        {title == "Cancel" ? (
          <Text
            style={{
              fontSize: 16,
              color: "#0140dc",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        ) : (
          <Text>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const [textInputValue, setTextInputValue] = useState<string>("");
  const [message, setMessage] = useState<string[]>([]);

  const handleInputChange = (text: string) => {
    setTextInputValue(text);
    if (text.trim() !== "") {
      setHideCameraButton(true);
      setHideAudioButton(true);
      setHideSendButton(false);
    } else {
      setHideCameraButton(false);
      setHideAudioButton(false);
      setHideSendButton(true);
    }
  };

  const sendMessages = () => {
    if (textInputValue.trim() !== "") {
      setMessage((prevMessages) => [...prevMessages, textInputValue]);
      setTextInputValue("");
      setHideCameraButton(false);
      setHideAudioButton(false);
      setHideSendButton(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatItemWrapper}>
        <View style={styles.chatItem}>
          <View style={styles.leftContainer}>
            <TabBarIcon
              name="chevron-left"
              color="#0140dc"
              onPress={() => navigation.navigate("HomeScreen" as never)}
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
      {message.map((msg, index) => (
        <View
          key={index}
          style={[
            styles.messageContainer,
            index % 2 === 0 ? styles.sentMessage : styles.receivedMessage,
          ]}
        >
          <Text style={styles.messageText}>{msg}</Text>
        </View>
      ))}

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={openModal}>
          <TabBarIcon name="plus" color="#0140dc" />
        </TouchableOpacity>
        <TextInput
          style={styles.inputText}
          placeholder="Scrivi il messaggio..."
          onChangeText={handleInputChange}
          value={textInputValue}
          onSubmitEditing={sendMessages} // Aggiungi l'evento onSubmitEditing
        />
        <Animatable.View
          animation={hideCameraButton ? "slideOutLeft" : "slideInRight"}
          duration={300}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          {!hideCameraButton && <TextIcon name="camera" color="#0140dc" />}
          {!hideAudioButton && <TextIcon name="microphone" color="#0140dc" />}
        </Animatable.View>

        {/* Aggiungi animazione per nascondere/mostrare l'icona di invio */}
        <Animatable.View
          animation={hideSendButton ? "slideOutLeft" : "slideInRight"}
          duration={300}
        >
          {!hideSendButton && (
            <TouchableOpacity onPress={sendMessages}>
              <TextIcon name="send" color="#0140dc" />
            </TouchableOpacity>
          )}
        </Animatable.View>
      </View>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <TabItem title="Camera" icon="camera" />
              <TabSeparator />
              <TabItem title="Photo & Video Library" icon="image" />
              <TabSeparator />
              <TabItem title="Document" icon="file" />
              <TabSeparator />
              <TabItem title="Location" icon="map-pin" />
              <TabSeparator />
              <TabItem title="Contact" icon="address-card" />
              <TabSeparator />
              <TabItem title="Poll" icon="pie-chart" />
              <TabSeparatorTransparent />
              <TabItem title="Cancel" onPress={closeModal} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: 10,
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
  textIcon: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  inputText: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  inputContainer: {
    paddingHorizontal: 16,
    alignItems: "stretch",
    justifyContent: "center",
  },
  messageContainer: {
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxWidth: "80%", // Imposta la larghezza massima per evitare testi troppo lunghi
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6", // Colore di sfondo per i messaggi inviati
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F4F4F4", // Colore di sfondo per i messaggi ricevuti
  },
  messageText: {
    fontSize: 16,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "flex-end", // Posiziona la modale in fondo allo schermo
    alignItems: "center", // Allinea gli elementi orizzontalmente al centro
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Colore di sfondo con opacità
  },

  modalContent: {
    backgroundColor: "#fff",
    width: "90%", // Utilizza tutta la larghezza disponibile
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },

  tabItem: {
    flexDirection: "row", // Imposta la direzione della vista come "row" (orizzontale)
    alignItems: "center", // Allinea gli elementi verticalmente al centro
    paddingVertical: 10,
  },

  tabIcon: {
    marginRight: 8, // Imposta il margine destro tra l'icona e il testo
  },

  tabTitle: {
    fontSize: 18, // Imposta la dimensione del testo a 18 punti
    fontWeight: "bold", // Imposta il testo in grassetto
  },
  tabSeparator: {
    height: 1,
    backgroundColor: "#ccc",
  },

  // Stile per lo spazio trasparente tra "Cancel" e "Poll"
  tabSeparatorTransparent: {
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },

  cancelText: {
    justifyContent: "center",
  },
});
