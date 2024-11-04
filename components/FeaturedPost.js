import Link from 'next/link';
export function FeaturedPost(props) {
  let p = props.post;

  const formatTitle = (title) => {
    let formattedTitle = title
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    if (formattedTitle === 'Gentype') {
      formattedTitle = 'GenType';
    }

    if (formattedTitle === 'Ai Roadtrip') {
      formattedTitle = 'AI Road Trip';
    }

    return formattedTitle;
  };

  return (
    <div
      className=" bg-gray-100 p-4 rounded-md hover:bg-gray-200
    phone:p-4
    "
    >
      <a href={p.slug} className={`flex-grow `}>
        <div
          className="w-full flex justify-center 
      items-center rounded-md   p-4
      phone:p-0
      "
        >
          <img src={p.image} className="w-fit h-auto rounded-md max-h-96"></img>
        </div>

        <div className="text-gray-900 mt-2 text-lg phone:text-base">
          {' '}
          {formatTitle(p.title)}
        </div>
        <div className="text-gray-500 text-lg phone:text-base">
          {p.description}
        </div>
      </a>
    </div>
  );
}
