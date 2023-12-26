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
import { useEffect, useRef } from 'react';
import HomeMenu from '../components/HomeMenu';

export default function Home(props) {
  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState(posts.posts);
  const [selectedTags, setSelectedTags] = useState([]);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const borderDiv = 'border-b-[1px] border-gray-400 py-2';
  const [displayMenu, setDisplayMenu] = useState(false);

  let featuredPosts = [];
  console.log('ALL PROJECTS', allProjects);
  allProjects.forEach((post) => {
    if (post.featured) {
      featuredPosts.push(post);
    }
  });

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
        console.log(scrollRef.current.scrollTop);

        const halfScreen = (window.innerHeight * 3) / 4;
        if (window.innerWidth <= 768) {
          if (scrollRef.current.scrollTop > halfScreen - 40) {
            setDisplayMenu(true);
          } else {
            setDisplayMenu(false);
          }
        } else {
          if (scrollRef.current.scrollTop > halfScreen - 64) {
            setDisplayMenu(true);
          } else {
            setDisplayMenu(false);
          }
        }
      }
    }
    // Add event listener for scroll events
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    // Cleanup function
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    // Set window height after component has mounted
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <>
      <div
        className="absolute inset-0 w-screen overflow-x-hidden font-sans 
      phone:p-0 phone:m-0
      "
        ref={scrollRef}
      >
        <Header scrollPosition={scrollPosition} />

        {/* <div className="fixed top-0 left-0 z-10">
          Scroll position: {scrollPosition} / {windowHeight}
        </div> */}

        {displayMenu && (
          <HomeMenu
            scrollPosition={scrollPosition}
            windowHeight={windowHeight}
          />
        )}

        <div className="bg-white h-32 phone:h-8"></div>
        <div
          className="flex space-x-4 mb-12 mx-auto 
        phone:space-x-0 justify-center w-[1000px] phone:w-full"
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
