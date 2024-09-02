import React, { useEffect, useState } from "react";
import axios from "axios";

const Six = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        setPosts(res.data);
      });
    };
    fetch();
  }, [posts]);
  console.log(posts);
  return (
    <div>
      {posts.map((item) => {
        return (
          <>
            <h3 key={item.id}>Todo:{item.id } {item.title}</h3>
            {item.completed ? "Done" : "Not done"}
          </>
        );
      })}
    </div>
  );
};

export default Six;
