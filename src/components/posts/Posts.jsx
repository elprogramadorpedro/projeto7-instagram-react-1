import Post from "./Post.jsx";

import "../../css/posts.css";

const posts = [
  {
    userAvatar: "img/meowed.svg",
    username: "meowed",
    postImg: "img/gato-telefone.svg",
    likedByImg: "img/respondeai.svg",
    likedByUser: "respondeai",
  },
];

export default function Posts() {
  return (
    <section className="posts">
      {posts.map((post, index) => (
        <Post
          userAvatar={post.userAvatar}
          username={post.username}
          postImg={post.postImg}
          likedByImg={post.likedByImg}
          likedByUser={post.likedByUser}
          key={index}
        />
      ))}
    </section>
  );
}
