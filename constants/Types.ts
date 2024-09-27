export type Tag = {
  type: string;
  label: string;
};

export type Comment = {
  username: string;
  createdAt: string;
  comment: string;
};

export type Post = {
  id: number;
  username: string;
  avatarImageURL: string;
  createdAt: string;
  caption: string;
  imageURL: string;
  tags: Tag[];
  upVotes: number;
  comments: Comment[];
};
