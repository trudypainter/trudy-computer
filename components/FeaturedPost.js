import Link from 'next/link';
export function FeaturedPost(props) {
  let p = props.post;

  return (
    <a href={p.slug} className={`flex-grow bg-white`}>
      <img src={p.image} className="w-fit h-auto"></img>
      <div className="text-[blue] mt-2">{p.title}</div>
      <div>{p.description}</div>
    </a>
  );
}
