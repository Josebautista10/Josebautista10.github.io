import TypeAnimation from 'react-type-animation'
import Tilt from 'react-parallax-tilt'

function Home() {
  return (
    <div>
      <section id="Home">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-gray-900">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I&apos;m Jose Bautista.
              <br className=" lg:inline-block" />
              <TypeAnimation
                cursor
                sequence={[
                  'Junior Software Developer',
                  1000,
                  'Passion for Front-end',
                  1000,
                  'Young and willing to learn',
                  1000,
                  ''
                ]}
                wrapper="h2"
                repeat={Infinity}
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              I&apos;m a full stack junior developer with a passion for front-end. My
              favorite reason I code is because I get a chance to build
              something out of nothing.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Contact Me
              </a>

            </div>
          </div>

          <Tilt
            className="Tilt"
          >
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center py-9">
              <img
                className="object-cover object-center rounded w-1/2"
                alt="hero"
                src="./image-1.png"
              />
            </div>
          </Tilt>
        </div>
      </section>
    </div>
  )
}

export default Home
