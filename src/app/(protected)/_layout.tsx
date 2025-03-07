import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
const AppLayout = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Redirect href={"/signIn"} />;
  return <Stack />;
};
export default AppLayout;
