import FindMe from '../components/FindMe';
import BackButton from '../components/backButton';

export default function About() {
  return (
    <div>
      <BackButton />

      <div
        className="w-full p-4 flex m-0  justify-center 
           leading-snug my-24 mt-20 space-x-8 phone:space-x-0 

           phone:flex-col phone:px-4 phone:pt-2 phone:w-full phone:m-0
           phone:space-y-8 phone:my-12 
          "
      >
        <div className="w-1/3 phone:w-2/3">
          <div className="sticky top-24">
            <img
              className="w-full h-[40vw] object-cover rounded-t-3xl border-2 
              border-gray-200 phone:h-[80vw]
              "
              src="about/april24.jpg"
            ></img>
            <div className="text-gray-500 text-sm mt-2 ">
              Photo taken by{' '}
              <a
                target="_blank"
                href="https://www.instagram.com/abilorenzini/"
                className="underline"
              >
                Abby Lorenzini
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col space-y-8 text-gray-500  
        w-2/3 max-w-[800px] phone:w-full text-lg phone:pb-8 phone:text-base"
        >
          <div className="leading-6 ">
            Hi, my name is Trudy. I work at{' '}
            <a href="https://experiments.withgoogle.com/" className="underline">
              Google Creative Lab
            </a>{' '}
            in New York City. I care about building tools and experiments to
            make AI approachable for a wide audience.
          </div>
          <div>
            At Google, I split my time between building experimental AI
            prototypes and designing communication strategies for the company’s
            biggest AI research releases. Check out my work on{' '}
            <a href="/projects/bard-social" className="underline">
              AI advertisements
            </a>{' '}
            or{' '}
            <a href="/projects/gemini-launch" className="underline">
              controversial promotional videos
            </a>{' '}
            or{' '}
            <a href="/projects/gemini-15" className="underline">
              research demos
            </a>
            .
          </div>
          <div>
            I'm also a recent graduate of MIT (2023). I double majored in{' '}
            <a
              href="https://www.eecs.mit.edu/research/computer-science/"
              className="underline"
            >
              computer science
            </a>{' '}
            and{' '}
            <a href="https://cmsw.mit.edu/" className="underline">
              comparative media studies
            </a>
            . I published human/AI collaboration research through the MIT Media
            Lab, specifically the{' '}
            <a
              href="https://www.media.mit.edu/groups/viral-communications/overview/"
              className="underline"
            >
              Viral Communications Group
            </a>
            . Examples of this type of work are{' '}
            <a href="/projects/latent-lab" className="underline">
              Latent Lab
            </a>{' '}
            and{' '}
            <a href="/projects/meshup" className="underline">
              Meshup
            </a>
            . Through the comparative media studies major, I was involved with
            digital archive design and even travelled to Prague to build a{' '}
            <a
              href="https://shass.mit.edu/news/mit-and-czech-teams-develop-novel-digital-history-project-supported-misti-czech-seed-fund"
              target="_blank"
              className="underline"
            >
              custom archive
            </a>{' '}
            for historians working with WW2 documents.
          </div>

          <hr
            className="border-t-2 w-full  border-gray-200 m-0
  phone:my-2
  "
          ></hr>

          <div className="div">
            <div>Professional Work Featured On</div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  <a
                    href="https://www.theverge.com/2024/2/15/24073457/google-gemini-1-5-ai-model-llm"
                    className="underline"
                  >
                    The Verge
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wired.com/story/google-deepmind-gemini-pro-ai-upgrade/"
                    className="underline"
                  >
                    Wired
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bbc.com/news/technology-67650807"
                    className="underline"
                  >
                    BBC
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.forbes.com/sites/richardnieva/2024/02/14/google-deepmind-gemini/?sh=5ed21c471ac6"
                    className="underline"
                  >
                    Forbes
                  </a>
                </li>
                <li>
                  <a
                    href="https://fortune.com/2024/02/15/google-gemini-pro-competition-openai/"
                    className="underline"
                  >
                    Fortune
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.technologyreview.com/2024/02/15/1088367/googles-new-version-of-gemini-can-handle-far-bigger-amounts-of-data/"
                    className="underline"
                  >
                    MIT Technology Review
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.cnbc.com/2023/12/08/google-faces-controversy-over-edited-gemini-ai-demo-video.html"
                    className="underline"
                  >
                    CNBC
                  </a>
                </li>
                <li>
                  <a
                    href="https://techcrunch.com/2024/02/15/googles-new-gemini-model-can-analyze-an-hour-long-video-but-few-people-can-use-it/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAL6zsktyt2ZHPBhNDgYATLbVqqwcp2j7RR53NWmMQ3BXIscNPzG0-X9MhfYT6VspW5oKraoaYE9Yme-vQ4xbnSgR7U-_uGcosUIJT3Vh5SH7YxntZazWD_kj-i3sFk2haislkvknt_i6yxGSRg5kKkfp4t1u9RmtzWfu_zd7FHl4"
                    className="underline"
                  >
                    Tech Crunch
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cnet.com/tech/google-teases-an-even-better-version-of-gemini-but-youll-have-to-wait-for-it/"
                    className="underline"
                  >
                    CNET
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bloomberg.com/news/articles/2024-02-15/google-rolls-out-updated-ai-model-capable-of-handling-longer-text-video"
                    className="underline"
                  >
                    Bloomberg
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nytimes.com/2023/12/08/podcasts/hardfork-google-gemini-cybertruck.html"
                    className="underline"
                  >
                    Hard Fork Podcast
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.fastcompany.com/91029527/google-gemini-1-5-ai-llm"
                    className="underline"
                  >
                    Fast Company
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.businessinsider.com/google-gemini-ai-demo-misleading-video-chatgpt-2023-12?IR=T"
                    className="underline"
                  >
                    Business Insider
                  </a>
                </li>
                <li>
                  <a
                    href="https://finance.yahoo.com/news/google-definitely-had-hands-gemini-154000931.html"
                    className="underline"
                  >
                    Yahoo Finance
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/watch?v=tHS3qxU_3RE&t=320s"
                    className="underline"
                  >
                    MKBHD
                  </a>
                </li>
                <li>
                  <a
                    href="https://venturebeat.com/ai/google-unveils-gemini-1-5-a-next-gen-ai-model-with-million-token-context-window/"
                    className="underline"
                  >
                    Venture Beat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr
            className="border-t-2 w-full border-gray-200 m-0
  phone:my-2
  "
          ></hr>

          <div>
            I mean it when I say I love to chat. Reach out at{' '}
            <a href="mailto:hello@trudy.computer" className="underline">
              hello@trudy.computer
            </a>
          </div>

          <div className="phone:w-full phone:mx-auto phone:px-0 my-16">
            <FindMe />
          </div>
        </div>
      </div>
    </div>
  );
}
