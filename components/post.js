import Link from 'next/link';
export function Post(props) {
  let p = props.post;

  return (
    <div
      key={p.slug}
      className="flex flex-col justify-between w-full lg:w-1/2 py-8 px-4 md:p-8 border-black border-b border-r "
    >
      <div>
        <Link href={p.slug}>
          <h1 className="text-2xl hover:cursor-pointer">{p.title}</h1>
        </Link>
        <div className="flex flex-wrap ">
          <span className="border border-black rounded-full px-2 radius-32 mr-1 justify-center">
            {p.location}
          </span>{' '}
          <span className="border border-transparent rounded-full px-0 radius-32 mr-1 justify-center">
            {p.year}
          </span>
        </div>
        <p>{p.description}</p>
      </div>

      <div>
        <a
          href={p.slug}
          className="bg-gray-100 p-4 my-2 h-96 -md:p-1 -md:h-73 flex flex-col justify-center hover:cursor-pointer"
        >
          <img
            src={p.image}
            className="max-h-96 -md:max-h-72 p-4 object-contain"
            layout="fill"
          />
        </a>

        <div className="flex flex-wrap ">
          {p.tags.split(', ').map((elm) => (
            <span className="border  whitespace-nowrap border-black rounded-full px-2 radius-32 mr-1 mb-1">
              {elm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
