import React, { useEffect, useState } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { dummyPosts } from "@/constants/Dummies";
import { Post as PostType } from "@/constants/Types";

const HomeScreen = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetchPosts(0);
  }, []);

  const fetchPosts = (index: number) => {
    setLoading(true);
    // Simulates long response time.
    setTimeout(() => {
      setPosts([...posts, ...dummyPosts.slice(index, index + 5)]);
      setLoading(false);
    }, 1000);
  };

  const onScrollBeginDrag = () => {
    if (!hasScrolled) setHasScrolled(true);
  };

  const onEndReached = () => {
    if (hasScrolled) {
      if (posts.length !== dummyPosts.length) fetchPosts(posts.length);
    }
  };

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
