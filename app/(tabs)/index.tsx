import React, { useEffect, useState } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { dummyPosts } from "@/constants/Dummies";
import { Post as PostType } from "@/constants/Types";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    setPosts(dummyPosts);
    setLoading(false);
  };

  const onScrollBeginDrag = () => {};

  const onEndReached = () => {};

  return (
    <HomeTemplate
      loading={loading}
      posts={posts}
      onScrollBeginDrag={onScrollBeginDrag}
      onEndReached={onEndReached}
    />
  );
};

export default HomeScreen;
