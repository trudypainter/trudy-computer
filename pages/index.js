import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Post } from '../components/post';
import { ArchivePost } from '../components/ArchivePost';
import { FeaturedPost } from '../components/FeaturedPost';
import FilterBarSide from '../components/FilterBarSide';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import HomeMenu from '../components/HomeMenu';

// import dynamic from 'next/dynamic';
// const FractalTree = dynamic(() => import('../components/FractalTree'), { ssr: false });
// import P5Background from '../components/pfive2';
import WeatherHub from '../components/WeatherHub';

export default function Home(props) {
  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState(posts.posts);
  const [selectedTags, setSelectedTags] = useState([]);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const borderDiv = 'border-b-2 border-gray-200 py-2 text-gray-500';
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

        const halfScreen = (window.innerHeight * 1) / 2;
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

  const getProject = (title) => {
    const project = allProjects.filter((p) => p.title === title);
    console.log('PROJECT', project);
    return project[0];
  };

  return (
    <>
      <div
        className="absolute inset-0 w-screen overflow-x-hidden font-sans 
      phone:p-0 phone:m-0 bg-white
      font-['ABC_Diatype']"
        ref={scrollRef}
      >
        {/* <Header scrollPosition={scrollPosition} /> */}

        {/* <div className="fixed top-0 left-0 z-10">
          Scroll position: {scrollPosition} / {windowHeight}
        </div> */}

        <header
          className="h-1/2 bg-white flex 
          p-16 space-x-16
        phone:flex-col phone:w-full phone:p-4 phone:space-x-0 phone:h-auto
        "
        >
          <div
            className="w-1/3 phone:w-full text-gray-500 text-2xl
          phone:text-lg
          "
          >
            Trudy Painter is a software engineer at Google Creative Lab in NYC,
            making AI more approachable for everyone.
            <br className="phone:mb-12"></br>
            <div className="phone:mt-2 phone:mb-4 my-4">
              <a
                href="/about"
                className="bg-gray-100 p-2 rounded-md px-3 py-2 text-base mt-24
              hover:bg-gray-200 phone:text-sm "
              >
                ＋ More
              </a>
            </div>
          </div>
          <div
            className="w-2/3 phone:w-full bg-gray-100 rounded-md h-full 
          flex justify-end items-end phone:mt-4 phone:h-64"
          >
            <WeatherHub />
          </div>
        </header>

        {displayMenu && (
          <HomeMenu
            scrollPosition={scrollPosition}
            windowHeight={windowHeight}
          />
        )}

        <div
          className="bg-white w-screen p-16
          phone:pt-2 flex flex-col items-center 
          phone:p-0
        
        "
        >
          <div
            className="w-full phone:p-4 flex space-x-16 
          phone:flex-col phone:space-x-0
          phone:invisible phone:h-0 phone:w-0 phone:px-0
          "
          >
            <div className="w-1/3 phone:w-full">
              <div className="sticky top-24 phone:static">
                <div
                  className="text-2xl w-full text-gray-900
                phone:text-lg 
                "
                >
                  Google Creative Lab
                </div>
                <div className="mt-1 mb-0 w-full text-gray-500 text-lg phone:text-base">
                  At Google, I split my time between building prototypes and
                  creating clear communications around AI usage. I've worked on
                  some of the largest AI launches at Google, including Google's
                  state of the art multimodal model, Gemini.
                </div>
              </div>
            </div>

            <div className="w-2/3 phone:w-full phone:mt-4">
              <div>
                <FeaturedPost post={getProject('GENTYPE')} />
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-1/2">
                  <FeaturedPost post={getProject('GEMINI MULTIMODAL LAUNCH')} />
                </div>
                <div className="w-1/2">
                  <FeaturedPost post={getProject('AI ROADTRIP')} />
                </div>
              </div>
            </div>
          </div>
          <div className="h-32 phone:h-0"></div>
          <div
            className="max-full relative  phone:p-4
            flex space-x-16
          overflow-visible
          phone:flex-col phone:space-x-0 
          phone:invisible phone:h-0 phone:w-0 phone:px-0
          "
          >
            <div className="w-1/3 bg-white phone:w-full">
              <div className="sticky top-24 phone:static">
                <div
                  className="text-2xl w-full text-gray-900
                phone:text-lg
                "
                >
                  MIT Media Lab
                </div>
                <div
                  className="mt-1 mb-4 text-lg text-gray-500
                phone:text-base
                "
                >
                  I graduated from MIT in 2023 with a double major in computer
                  science + comparative media studies. I also published research
                  on AI tools through the MIT Media Lab.
                </div>
              </div>
            </div>
            <div className="w-2/3 phone:w-full">
              <div>
                <FeaturedPost post={getProject('LATENT LAB')} />
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="w-2/3 phone:w-1/2">
                  <FeaturedPost post={getProject('MESHUP')} />
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 phone:h-0"></div>

          <div
            className="flex space-x-0 mb-12 mx-auto
            phone:space-x-0 justify-center w-full 
            phone:w-full phone:flex-col "
          >
            <div
              className="flex flex-col pr-0 w-1/3 
            phone:invisible phone:h-0 phone:w-0 phone:px-0"
            >
              <div
                className="flex flex-col w-full space-x-0 
              sticky top-20 bg-white"
              >
                <div
                  className="text-2xl text-left pt-4 
                text-gray-900 w-full mb-1 
                 phone:w-full phone:p-4 phone:pt-8 phone:pb-0 phone:mb-0"
                >
                  {' '}
                  Project Archive
                </div>
                <div className="text-gray-500 text-lg">
                  All projects, big and small.
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

            {/* phone version of header */}
            <div className="hidden phone:block w-full px-4">
              <div className="text-lg text-gray-900"> Project Archive</div>
              <div className="text-gray-500 text-base">
                All projects, big and small.
              </div>
            </div>

            <div
              className="flex flex-col w-2/3 space-y-4 
            phone:w-full mt-24 pl-12 phone:mt-0 phone:p-4
          "
            >
              {selectedProjects.map((p) => (
                <ArchivePost post={p} borderDiv={borderDiv} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
