type Group = {
  id: string;
  name: string;
  image: string;
};

type User = {
  id: string;
  name: string;
  image: string | null;
};

export type Post = {
  id: string;
  title: string;
  created_at: string; // ISO date string
  upvotes: number;
  nr_of_comments: number;
  description: string | null;
  image: string | null;
  group: Group;
  user: User;
};

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  parent_id: string;
  comment: string;
  created_at: string;
  upvotes: number;
  user: User;
  replies: Comment[];
};
