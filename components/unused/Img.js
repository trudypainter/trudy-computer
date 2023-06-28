export default function MDImage(props) {
  if (props.title !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.title}</figcaption>
        poop
      </figure>
    );
  } else {
    return <img src={props.src} alt={props.alt} />;
  }
}
