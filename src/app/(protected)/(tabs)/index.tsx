import { View, FlatList } from "react-native";
import PostListItem from "../../../components/PostListItem";
import posts from "../../../../assets/data/post.json";
const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
};
export default HomeScreen;
