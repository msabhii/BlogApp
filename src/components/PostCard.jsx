import React from "react";
import appwriteService from "../appWrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  console.log(appwriteService.getFilePreview(featuredImage));
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {featuredImage ? (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          ) : (
            <div className="bg-gray-200 rounded-xl h-40 w-full flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        {/* Debugging: Display the featuredImage value */}
        <pre>{JSON.stringify(featuredImage, null, 2)}</pre>
      </div>
    </Link>
  );
}

export default PostCard;
