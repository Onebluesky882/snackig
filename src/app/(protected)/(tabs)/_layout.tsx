import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
const TapLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "pink" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerTitle: "Reddit",
            headerTintColor: "#FF5700",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            title: "Communities",
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "menu",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "create",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default TapLayout;
