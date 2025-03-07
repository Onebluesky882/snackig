import { View, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
const AuthLayout = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href={"/"} />;
  return <Stack />;
};
export default AuthLayout;
