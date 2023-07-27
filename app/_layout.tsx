import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../app/(tabs)/index";
import ChatScreen from "../app/chat";
import SettingsScreen from "../app/settings";
import StoriesScreen from "../app/stories";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import EditProfileScreen from './editProfile';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

const Stack = createStackNavigator();

const stackScreens = () =>{
    return(
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const settingsStackScreens = () =>{
  return(
      <Stack.Navigator>
        <Stack.Screen 
          name="SettingScreen"
          component={SettingsScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen 
          name="Edit Profile"
          component={EditProfileScreen}
          options={{ headerBackTitleStyle:{ alignItems: 'center', justifyContent: 'center'}}}
          />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function RootLayoutNav() { 
  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Chats"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Chats") {
                iconName = "chatbubbles-outline";
              } else if (route.name === "Settings") {
                iconName = "cog-outline";
              } else if (route.name === "Status") {
                iconName = "disc-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#0140dc",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Status"
            component={StoriesScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Chats"
            component={stackScreens}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={settingsStackScreens}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
