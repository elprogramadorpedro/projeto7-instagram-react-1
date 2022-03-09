export default function Suggestion(props) {
  return (
    <div className="suggestion">
      <div className="user">
        <img src={props.img} alt="img sugest" />
        <div className="text">
          <div className="name">{props.username}</div>
          <div className="reason">{props.reason}</div>
        </div>
      </div>
      <div className="follow">Seguir</div>
    </div>
  );
}
