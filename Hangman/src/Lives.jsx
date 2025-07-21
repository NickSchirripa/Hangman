export default function Lives(props) {
    const style = { backgroundColor: props.backgroundColor, color: props.color }
  return (
    <span
      className="chips"
      style={style}
    >
      {props.name}
    </span>
  );
}