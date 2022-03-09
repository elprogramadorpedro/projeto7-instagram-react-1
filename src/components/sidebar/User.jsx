export default function User(props) {
  return (
    <div className="user">
      <img src={props.img} alt={props.user} />
      <div className="text">
        <strong>{props.username}</strong>
        {props.user}
      </div>
    </div>
  );
}
