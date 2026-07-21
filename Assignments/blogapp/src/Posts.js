import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // Method to load posts
  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ error }));
  }

  // Lifecycle hook: runs after first render
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook: catches errors
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    console.error("Error info:", info);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Error loading posts</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.slice(0, 5).map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
