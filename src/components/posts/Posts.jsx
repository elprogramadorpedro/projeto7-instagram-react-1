import Post from "./Post.jsx";

import "../../css/posts.css";

const placeholderData = [
  {
    avatar: "img/meowed.svg",
    username: "meowed",
    postImg: "img/gato-telefone.svg",
    likedByImg: "img/respondeai.svg",
    likedByUser: "respondeai",
  },
  {
    avatar: "img/meowed.svg",
    username: "meowed",
    img: "img/gato-telefone.svg",
    likedByImg: "img/respondeai.svg",
    likedByUser: "respondeai",
  },
  {
    avatar: "img/meowed.svg",
    username: "meowed",
    img: "img/gato-telefone.svg",
    likedByImg: "img/respondeai.svg",
    likedByUser: "respondeai",
  },
  {
    avatar: "img/meowed.svg",
    username: "meowed",
    img: "img/gato-telefone.svg",
    likedByImg: "img/respondeai.svg",
    likedByUser: "respondeai",
  },
  {
    avatar: "img/meowed.svg",
    username: "meowed",
    img: "img/gato-telefone.svg",
    likedByImg: "img/respondeai.svg",
    likedByUser: "respondeai",
  },
];

export default function Posts(props) {
  const content = props.content ? props.content : placeholderData;

  return (
    <section className="posts">
      {content.slice(0, 12).map((post, index) => (
        <Post
          userAvatar={post.avatar}
          username={post.username}
          postImg={post.img}
          likedByImg={post.likedByImg}
          likedByUser={post.likedByUser}
          key={index}
        />
      ))}
    </section>
  );
}
