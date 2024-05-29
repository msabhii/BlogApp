import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appWrite/config";
import { Container, PostCard } from "../components";

const EditPost = () => {
  const [posts, setPosts] = useState([]); //? In tutorial posts => post
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => setPosts(post));
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return posts ? (
    <Container>
      <PostCard {...posts} />
    </Container>
  ) : null;
};

export default EditPost;
