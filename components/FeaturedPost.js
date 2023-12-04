import Link from 'next/link';
export function FeaturedPost(props) {
  let p = props.post;

  return (
    <div key={p.slug} className={`flex h-[280px] w-full space-x-4`}>
      <img
        className="h-full w-[530px] object-cover flex-shrink-0 border-[1px] border-gray-200"
        src={p.image}
      ></img>

      <div className="flex-grow ">
        <div className="flex justify-between">
          <div className="text-2xl">{p.title}</div>
          <div>
            [{p.location}, {p.year}]
          </div>
        </div>
        <div className="flex flex-col h-full justify-between pb-8">
          <div>
            <div>{p.description}</div>
            <div className="text-sm flex flex-col">
              <a className="hover:underline hover:cursor-pointer">
                ↪ Project Details
              </a>
              <a className="hover:underline hover:cursor-pointer">
                ↪ Launch Project
              </a>
            </div>
          </div>
          <div className="flex flex-wrap  ">
            {p.tags.split(', ').map((elm) => (
              <span className="bg-gray-100 px-2 mr-1 mt-1 rounded-md">
                {elm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
