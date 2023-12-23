import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Post } from '../components/post';
import { ArchivePost } from '../components/ArchivePost';
import { FeaturedPost } from '../components/FeaturedPost';
import FilterBarSide from '../components/FilterBarSide';
import { useState } from 'react';
import FeaturedSection from '../components/featuredSection';

export default function Home(props) {
  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState(posts.posts);
  const [selectedTags, setSelectedTags] = useState([]);

  const borderDiv = 'border-b-[1px] border-gray-400 py-1';

  let featuredPosts = [];
  console.log('ALL PROJECTS', allProjects);
  allProjects.forEach((post) => {
    if (post.featured) {
      featuredPosts.push(post);
    }
  });

  // UNICODE FLOWERS ❋ ✣ ✤

  return (
    <>
      <div
        className="absolute inset-0 w-screen overflow-x-hidden font-sans 
      phone:p-0 phone:m-0
      "
      >
        {/* <Header /> */}
        <div
          className="sticky top-0 left-0 w-full h-16 bg-yellow z-10 phone:h-10
      border-b-[1px] border-black bg-[yellow] text-2xl flex items-center justify-center"
        >
          {/* DESKTOP */}
          <div
            className="w-[1000px] flex justify-between 
        mx-auto space-x-8 phone:hidden"
          >
            <Link className="w-[20%] phone:w-fit" href="/">
              Trudy Painter
            </Link>
            <div className="w-[80%] flex justify-between"></div>
          </div>

          {/* PHONE */}
          <div className="block md:hidden text-lg flex justify-between w-full p-4">
            <Link href="/">Trudy Painter</Link>
            <div></div>
          </div>
        </div>

        {/* <FeaturedSection featuredPosts={featuredPosts} borderDiv={borderDiv} /> */}

        <div
          className="flex space-x-4 mb-12 mx-auto 
        phone:space-x-0 justify-center w-[1000px] "
        >
          <div className="flex flex-col phone:invisible phone:h-0 phone:w-0">
            <div className="flex flex-col w-full space-x-0 sticky top-16 bg-white">
              <div className={`${borderDiv} ml-0 w-[200px] flex-shrink-0`}>
                Filter By
              </div>

              <FilterBarSide
                allProjects={allProjects}
                selectedProjects={selectedProjects}
                setSelectedProjects={setSelectedProjects}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            </div>
          </div>

          <div
            className="flex flex-col w-[80%] space-y-2 
            phone:w-full
          "
          >
            <div
              className="flex w-full space-x-4 sticky top-16 bg-white 
            phone:invisible phone:h-0 phone:w-0 phone:p-0 phone:m-0 phone:space-x-0
            "
            >
              <div className={`${borderDiv}  w-48 flex-shrink-0`}>Title</div>
              <div className={`${borderDiv}  flex-shrink-0 w-64`}>Image</div>
              <div className={`${borderDiv}  flex-grow`}>Notes</div>
            </div>
            {selectedProjects.map((p) => (
              <ArchivePost post={p} borderDiv={borderDiv} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
