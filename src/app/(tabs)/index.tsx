import { View, Text, Image, StyleSheet } from "react-native";
import Post from "../../../assets/data/post.json";
import { formatDistanceToNow } from "date-fns";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Home = () => {
  const post = Post[0];
  return (
    <View style={styles.container}>
      {/* Post header */}
      <View style={{ flexDirection: "row", gap: "10", alignItems: "center" }}>
        <Image source={{ uri: post.group.image }} style={styles.image} />
        <Text>{post.group.name}</Text>
        <Text>{formatDistanceToNow(new Date(post.created_at))}</Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.joinButton}>Join</Text>
        </View>
      </View>

      {/* context */}

      <Text style={styles.title}>{post.title}</Text>
      {post.image ?? (
        <Image
          source={{ uri: post.image as unknown as string }}
          style={{
            width: "100%",
            aspectRatio: 3 / 4,
            borderRadius: 15,
            paddingVertical: 8,
          }}
        />
      )}
      {!post.image && post.description && (
        <Text numberOfLines={4}>{post.description}</Text>
      )}

      {/* Footer */}
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="arrow-up-bold-box-outline"
          size={19}
          color={"gray"}
        />
        <MaterialCommunityIcons
          name="arrow-down-bold-box-outline"
          size={19}
          color={"gray"}
        />
        <MaterialCommunityIcons
          name="comment-outline"
          size={19}
          color={"gray"}
        />{" "}
        <MaterialCommunityIcons
          name="arrow-up-bold-box-outline"
          size={19}
          color={"gray"}
        />
        <View style={{ flexDirection: "row", marginLeft: "auto" }}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={19}
            color={"gray"}
          />
          <MaterialCommunityIcons
            name="share-outline"
            size={19}
            color={"gray"}
          />
        </View>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  joinButton: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  image: { width: 30, height: 30, borderRadius: 8 },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
