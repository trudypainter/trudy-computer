import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Post } from '../components/post';
import { ArchivePost } from '../components/ArchivePost';
import { FeaturedPost } from '../components/FeaturedPost';
import FilterBarSide from '../components/FilterBarSide';
import { useState } from 'react';

import Image from 'next/image';
import FilterBar from '../components/FilterBar';

export default function Home(props) {
  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState(posts.posts);
  const [selectedTags, setSelectedTags] = useState([]);

  const borderDiv = 'border-b-[1px] border-gray-400 py-1';

  // UNICODE FLOWERS ❋ ✣ ✤

  return (
    <>
      <div
        className="absolute inset-0 w-screen overflow-x-hidden font-serif 
      phone:p-0 phone:m-0
      "
      >
        <Header />

        <div
          className="flex flex-col max-w-[900px] mx-auto space-y-16  
          my-24 
          phone:invisible phone:h-0 phone:m-0 phone:p-0"
        >
          <FeaturedPost post={allProjects[0]} borderDiv={borderDiv} />
          <FeaturedPost post={allProjects[1]} borderDiv={borderDiv} />
          <FeaturedPost post={allProjects[2]} borderDiv={borderDiv} />
        </div>

        <div
          className="flex space-x-4 sticky top-0 mb-48 
        phone:space-x-0"
        >
          <div className="flex flex-col phone:invisible phone:h-0 phone:w-0">
            <div className="flex flex-col w-full space-x-4 sticky top-0 bg-white">
              <div className={`${borderDiv} ml-4 w-[300px] flex-shrink-0`}>
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
            className="flex flex-col max-w-[900px] space-y-2 
            phone:w-full
          "
          >
            <div
              className="flex w-full space-x-4 sticky top-0 bg-white 
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
