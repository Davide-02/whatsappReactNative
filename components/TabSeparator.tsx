import { View } from "react-native";

export const TabSeparator = () => (
  <View style={{ height: 1, backgroundColor: "#ccc" }} />
);

const TabSeparatorTransparent = () => (
  <View
    style={{
      height: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      marginBottom: 10,
    }}
  />
);
