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
// import P5Background from '../components/pfive2';

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
      phone:p-0 phone:m-0
      "
        ref={scrollRef}
      >
        {/* <Header scrollPosition={scrollPosition} /> */}

        {/* <div className="fixed top-0 left-0 z-10">
          Scroll position: {scrollPosition} / {windowHeight}
        </div> */}

        <header
          className="fixed z-[-1] top-0 left-0 h-1/2 w-full bg-black
         text-white text-2xl flex justify-center items-center p-4"
        >
          {/* <P5Background
            scrollPosition={scrollPosition}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
          /> */}
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md"></div>
          <div
            className="fixed top-0 left-0 w-screen phone:p-4
           h-1/2 flex justify-center items-center"
          >
            <div className="max-w-[1000px]">
              Trudy Painter is a creative technologist at Google Creative Lab in
              New York City and recent graduate of MIT.
              <br></br>
              <br></br>
              She designs and builds prototypes to make AI models more
              approachable, for everyone.{' '}
            </div>
          </div>
        </header>

        {displayMenu && (
          <HomeMenu
            scrollPosition={scrollPosition}
            windowHeight={windowHeight}
          />
        )}

        <div className="bg-transparent h-1/2 phone:h-1/2"></div>
        <div className="bg-white w-screen pt-32 phone:pt-8 flex flex-col items-center">
          <div className="max-w-[1000px] phone:w-full phone:p-4">
            <div className="text-2xl w-full">GOOGLE CREATIVE LAB</div>
            <div className="mt-1 mb-4 w-full">
              At Google, half of my time is spent building prototypes and the
              other half is spent creating clear communications around AI usage.
              I've worked on some of the largest AI launches at Google,
              including Google's state of the art multimodal model, Gemini.
            </div>
            <div className="max-w-[1000px] space-x-4 flex justify-center phone:flex-wrap">
              <div className="phone:order-2 phone:w-[calc(50vw-36px)] phone:mt-4">
                <FeaturedPost post={getProject('BARD SOCIAL STRATEGY')} />
              </div>
              <div className="phone:order-1 phone:w-full">
                <FeaturedPost post={getProject('GEMINI MULTIMODAL LAUNCH')} />
              </div>
              <div className="phone:order-2 phone:w-[calc(50vw-36px)] phone:mt-4">
                <FeaturedPost post={getProject('GEMINI 1.5 PRO LAUNCH')} />
              </div>
            </div>
          </div>
          <div className="h-24 phone:h-4"></div>

          <div className="max-w-[1000px] phone:w-full phone:p-4">
            <div className="text-2xl w-full">MIT MEDIA LAB</div>
            <div className="mt-1 mb-4">
              I graduated from MIT in 2023 with a double major in computer
              science and comparative media studies. I was heavily involved with
              the MIT Media Lab, specifically the Viral Communications group. I
              researched how to push the boundaries of human / AI interaction
              and published work on the topic.
            </div>
            <div className="w-full">
              <FeaturedPost post={getProject('LATENT LAB')} />
            </div>
            <div className="flex space-x-4 mt-8">
              <div className="w-2/3 phone:w-1/2">
                <FeaturedPost post={getProject('MESHUP')} />
              </div>
              <div className="w-1/3 phone:w-1/2">
                <FeaturedPost post={getProject('REAL TALK RADIO')} />
              </div>
            </div>
          </div>
          <div className="h-24 phone:h-2"></div>

          <hr
            className="hidden phone:block border-t-2 w-screen bg-blue-100 border-black m-0
  phone:my-2
  "
          ></hr>
          <div className="text-2xl text-left max-w-[1000px] w-full mb-3 phone:w-full phone:p-4 phone:pt-8 phone:pb-0 phone:mb-0">
            {' '}
            ALL PROJECTS
          </div>

          <div
            className="flex space-x-4 mb-12 mx-auto bg-white
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
        </div>

        <Footer />
      </div>
    </>
  );
}
