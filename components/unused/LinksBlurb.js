export function LinksBlurb() {
  return (
    <>
      <div className="w-full text-3xl bg-indigo-200 p-6 pt-24 pb-16 border-r-4 border-b-4 border-black">
        <div className="lg:flex justify-between">
          <p className="mb-32 lg:w-1/2">
            Find me on the internet. <br></br> <br></br>Or say hello over{' '}
            <a
              className="underline hover:no-underline"
              href="mailto:trudy.e.painter@gmail.com"
            >
              email
            </a>
            !
          </p>
          <div className="relative  h-[500px] w-[500px] p-4 m-auto">
            <a
              className=" absolute top-16 left-1/4 underline hover:no-underline"
              target="blank"
              href="https://www.are.na/trudy-painter"
            >
              Are.na
            </a>

            <a
              className="absolute top-2/3 left-20 underline hover:no-underline"
              target="blank"
              href="https://open.spotify.com/user/trudypaintet?si=ZlW6diDKSl61x9oKhit5BA"
            >
              Spotify
            </a>

            <a
              className="absolute top-[200px] left-[200px] underline hover:no-underline"
              target="blank"
              href="https://github.com/trudypainter"
            >
              Github
            </a>

            <a
              className="absolute left-8 bottom-16 underline hover:no-underline"
              target="blank"
              href="https://vsco.co/bionicpinkytoe/gallery"
            >
              VSCO
            </a>

            <a
              className="absolute right-16 bottom-8 underline hover:no-underline"
              target="blank"
              href="https://www.linkedin.com/in/trudy-painter/"
            >
              LinkedIn
            </a>

            <a
              className="absolute right-8 underline hover:no-underline"
              target="blank"
              href="TrudyPainter_Resume.pdf"
            >
              Resume
            </a>

            {/* black to white gradient */}
            <div className="absolute top-[-1rem] left-1 w-full h-4 border-2 border-black bg-gradient-to-r from-black to-transparent "></div>
            <div className="w-full flex justify-between absolute top-[-3rem] left-0">
              {' '}
              <div>Personal</div> <div>Professional</div>
            </div>

            <div className="absolute left-[-253px] top-[241px] w-full h-4 border-2 border-black bg-gradient-to-l from-black to-transparent -rotate-90">
              <div className="w-full flex justify-between absolute top-[-2.4rem] ">
                <div>Peripheral</div> <div>Essential</div>
              </div>
            </div>
            {/* rotate 90 deg */}
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6 border-l-4 border-b-4 border-black"></div>
    </>
  );
}
