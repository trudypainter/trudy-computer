import Link from 'next/link';
export function Post(props) {
  let p = props.post;

  return (
    <div
      key={p.slug}
      className="flex flex-col justify-between w-full lg:w-1/2 p-8 border-black border-b border-r "
    >
      <div>
        <Link href={p.slug}>
          <h1 className="text-2xl hover:cursor-pointer">{p.title}</h1>
        </Link>
        <p>
          <span className="border border-black rounded-full px-2 radius-32">
            {p.location}
          </span>{' '}
          <span>{p.year}</span>
        </p>
        <p>{p.description}</p>
      </div>

      <div>
        <div className="bg-gray-100 p-4 my-2 h-96 flex flex-col justify-center ">
          <img
            src={p.image}
            className="max-h-96 p-4 object-contain"
            layout="fill"
          />
        </div>

        {p.tags.split(', ').map((elm) => (
          <span className="border border-black rounded-full px-2 radius-32 mr-1 ">
            {elm}
          </span>
        ))}
      </div>
    </div>
  );
}
