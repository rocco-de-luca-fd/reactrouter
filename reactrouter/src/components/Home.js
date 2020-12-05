//useEffect ci permette di vedere la chiamta qnd la home sarà vista dallo user
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    fetchData();
    // l' array vuol dire che la chiamata si attiva qnd visitiamo la homepage
  }, [])
  // aggoirno lo state
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await rawData.json();
    // cn lo slice perendo da 0 a 10 item dell'api
    const posts = data.slice(0, 10);
    setPosts(posts)
  }
  return (
    <div className="App">
      <h1>sn home page</h1>
      {/*all'arrow function ci sono le tonde dp la freccia così si ha un return*/}
      {posts.map(post => (
        <Link to={`/${post.id}`}>
          {/**qunado clicco sul titolo del post lo apro xkè accedo al suo id */}
          <h4 key={post.id}> {post.title}</h4>
        </Link>

      ))}
    </div>
  );
}

export default Home;