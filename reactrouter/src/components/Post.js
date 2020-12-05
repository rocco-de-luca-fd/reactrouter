//useEffect ci permette di vedere la chiamta qnd la home sarà vista dallo user
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
  useEffect(() => {
    fetchData();
    // l' array vuol dire che la chiamata si attiva qnd visitiamo la homepage
  }, [])
  // aggoirno lo state
  const [post, setPost] = useState({});
  const fetchData = async () => {
      const id = props.match.params.id
    const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await rawData.json();
    console.log(post);
    setPost(post)
  }
  return (
    <div className="App">
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
    </div>
  );
}

export default Post;