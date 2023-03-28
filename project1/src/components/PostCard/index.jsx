import './styles.css'

export const PostCard = (props) => (
  <div className="post">
    <img src={props.cover} alt={props.title} />
    <div className="post-content">
      <h1>{props.title} {props.id}</h1>
      <p>{props.body}</p>
    </div>
  </div>
);
