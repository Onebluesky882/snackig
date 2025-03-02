import { StyleSheet, Text, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";

type Todos = {
  title: string;
  userId: number;
  id: number;
  completed: boolean;
};
const Product = ({ completed, id, title, userId }: Todos) => {
  return (
    <View>
      <Text> {title}</Text>;<Text> {completed}</Text>;<Text> {id}</Text>;
      <Text> {userId}</Text>;
    </View>
  );
};
const Homepage = () => {
  return (
    <Button>
      <ButtonText>click</ButtonText>
    </Button>
  );
};
export default Homepage;
const styles = StyleSheet.create({});
