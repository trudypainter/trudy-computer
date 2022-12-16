import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Post } from '../components/post';
import { useState } from 'react';

import Image from 'next/image';

export default function Home(props) {
  const [projects, updateProjects] = useState({
    data: [],
    locations: [],
    topics: [],
  });

  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [locations, setLocations] = useState([]);
  const [topics, setTopics] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <>
      <Header />

      <div className="w-full flex flex-wrap ">
        {posts.posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
      <Footer />
    </>
  );
}
