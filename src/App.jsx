import { useState } from "react";
import "./App.css";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState([
    {
      author: "johnadrielle",
      content: "Pink Floyd",
      imageUrl:
        "https://www.thisdayinmusic.com/wp-content/uploads/1946/03/Pink-Floyd-GettyImages-74290466.webp",
      createdAt: "10/29/2025, 12:05:12 PM",
    },
    {
      author: "Johnny Moonlight",
      content: "Pink Floyd Wish You Were Here Album ",
      imageUrl:
        "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F57e05ca38ee171cf70fd9486aa6dd40a.1000x1000x1.png",
      createdAt: "10/29/2025, 12:10:00 PM",
    },
  ]);

  const handlePost = () => {
    if (!author || !content) return alert("Please enter author and content.");

    const newPost = {
      author,
      content,
      imageUrl,
      createdAt: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setAuthor("");
    setContent("");
    setImageUrl("");
  };

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <h1 className="title">News Feed</h1>

        <div className="post-form">
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handlePost}>Post</button>
        </div>

        <div className="feed">
          {posts.map((post, index) => (
            <div className="post-card" key={index}>
              <p className="author">{post.author}</p>
              <p className="content">{post.content}</p>
              {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
              <p className="timestamp">Created At: {post.createdAt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
