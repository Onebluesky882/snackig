import { View, Text, Image, StyleSheet } from "react-native";
import { formatDistanceToNow } from "date-fns";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
};
const PostListItem = ({ post }: PostListItemProps) => {
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
      {post.image && (
        <Image
          source={{ uri: post.image }}
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
        <View style={{ flexDirection: "row", gap: "10" }}>
          <View style={[styles.iconBox, { flexDirection: "row" }]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-box-outline"
              size={19}
              color={"gray"}
            />
            <Text>{post.upvotes}</Text>
            <MaterialCommunityIcons
              name="arrow-down-bold-box-outline"
              size={19}
              color={"gray"}
            />
          </View>

          <View style={[styles.iconBox, { flexDirection: "row" }]}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={19}
              color={"gray"}
            />
            <Text>{post.nr_of_comments}</Text>
          </View>
          <View style={[styles.iconBox, { flexDirection: "row" }]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-box-outline"
              size={19}
              color={"gray"}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: "auto",
            gap: 10,
            alignItems: "center",
          }}
        >
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
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: "5",
    alignItems: "center",
  },
});

export default PostListItem;
