import FindMe from '../components/FindMe';
import BackButton from '../components/backButton';

export default function About() {
  return (
    <div>
      <BackButton />

      <div
        className="max-w-[1000px] mx-auto flex m-4  
           leading-snug my-32 space-x-8 phone:space-x-0
           phone:flex-col phone:px-4 phone:pt-2 phone:w-full phone:m-0
           phone:space-y-8 phone:my-12
          "
      >
        <div className="w-1/2 phone:w-[300px]">
          <img
            className="w-[300px] h-[300px] object-cover"
            src="about/me.jpg"
          ></img>
        </div>
        <div
          className="flex flex-col space-y-8 
        w-full phone:w-full text-lg phone:pb-8"
        >
          <div className="leading-6 ">
            Hi, my name is Trudy. I work at{' '}
            <a href="https://experiments.withgoogle.com/" className="underline">
              Google Creative Lab
            </a>{' '}
            in New York City. I'm building AI experiments to make large language
            models more approachable and accessible.
          </div>
          <div>
            At Google, half of my time is spent building prototypes and the
            other half is spent creating clear communications around AI usage.
            For example, I wrote and shot{' '}
            <a
              href="https://www.instagram.com/reel/Cy1OnhZxYGX/"
              className="underline"
            >
              advertisements
            </a>{' '}
            for Bard experiments. I also worked on Google's launch of their new
            multimodal model, Gemini. You can hear my voiceover in this{' '}
            <a
              href="https://www.youtube.com/watch?v=NHLnjWTEZps"
              className="underline"
            >
              use case video
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
            . I was involved with the MIT Media Lab, specifically the{' '}
            <a
              href="https://www.media.mit.edu/groups/viral-communications/overview/"
              className="underline"
            >
              Viral Communications Group
            </a>
            . I researched how to push the boundaries of interaction with large
            language models. Examples of this type of work are{' '}
            <a href="/projects/latent-lab" className="underline">
              Latent Lab
            </a>{' '}
            and{' '}
            <a href="/projects/meshup" className="underline">
              Meshup
            </a>
            .
          </div>

          <div>
            I mean it when I say I love to chat ❤ Reach out at{' '}
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
