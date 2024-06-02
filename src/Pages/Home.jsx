import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwirteServices from "../appWrite/config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    appwirteServices.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);
  if (posts.length <= 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 onClick={() => navigate('/login')} className="text-2xl font-bold hover:text-gray-500 cursor-pointer">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
