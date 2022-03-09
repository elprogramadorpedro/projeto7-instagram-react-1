export default function Story(props) {
  return (
    <article className="story">
      <div className="img_wrapper">
        <img src={props.img} alt={props.user} />
      </div>
      <h1 className="username">{props.user}</h1>
    </article>
  );
}
