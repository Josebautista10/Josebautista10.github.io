import { AcademicCapIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import certificates from './data'

export default function Certificate() {
  const [show, setShow] = useState(false)

  interface ICertificate {
    title: string
    type: string
    description: string
    image: string
  }
  const showMore = (dataArray: Array<ICertificate>) => (show ? dataArray : dataArray.slice(0, 4))
  console.log(showMore(certificates))
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Certificates
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

          </p> */}
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {showMore(certificates).map((certificate: ICertificate) => (
            <div key={certificate.image} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt={certificate.title}
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={certificate.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition duration-500">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {certificate.type}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {certificate.title}
                  </h1>
                  <p className="leading-relaxed">{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Make user scroll when they hit scroll more */}
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-green-600 rounded text-lg transition duration-500"
          >
            Show
            {' '}
            {show ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </section>
  )
}
