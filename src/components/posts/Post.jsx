export default function Post(props) {
  return (
    <article className="post">
      <div className="top">
        <div class="user">
          <img src={props.userAvatar} alt="userAvatar" />
          {props.username}
        </div>
        <div className="actions">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="content">
        <img src={props.postImg} alt="post img" />
      </div>
      <div className="bottom">
        <div className="actions">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>

          <ion-icon name="bookmark-outline"></ion-icon>
        </div>

        <div className="likes">
          <img src={props.likedByImg} alt="liked by img" />
          <div className="text">
            Liked by <strong>{props.likedByUser}</strong>and{" "}
            <strong> other 101.523 people </strong>
          </div>
        </div>
      </div>
    </article>
  );
}
