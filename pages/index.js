import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Post } from '../components/post';
import { useState } from 'react';

import Image from 'next/image';
import FilterBar from '../components/FilterBar';

export default function Home(props) {
  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState(posts.posts);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <>
      <div className="absolute inset-0 w-screen overflow-x-hidden">
        <Header />

        <FilterBar
          allProjects={allProjects}
          selectedProjects={selectedProjects}
          setSelectedProjects={setSelectedProjects}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        <div className="w-full flex flex-wrap ">
          {selectedProjects.map((p) => (
            <Post post={p} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
