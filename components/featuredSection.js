import { FeaturedPost } from '../components/FeaturedPost';

export default function FeaturedSection({ featuredPosts, borderDiv }) {
  return (
    <div
      className="flex flex-col max-w-[900px] mx-auto space-y-16  
          my-24 
          phone:invisible phone:h-0 phone:m-0 phone:p-0"
    >
      {featuredPosts.map((post) => (
        <FeaturedPost post={post} borderDiv={borderDiv} />
      ))}
    </div>
  );
}
