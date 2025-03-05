import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const TapLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "pink" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="antdesign" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "chat",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="antdesign" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default TapLayout;
