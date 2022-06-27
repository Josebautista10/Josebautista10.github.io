import axios from 'axios'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { PhoneIcon } from '@heroicons/react/solid'

function Contact() {
  const [quote, setQuote] = useState(null)
  const [joke, setJoke] = useState(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const getQuote = () => {
    axios.get('https://api.kanye.rest').then((res) => setQuote(res.data.quote))
  }

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_rqlpasb',
        'template_xfbzeqn',
        event.currentTarget,
        'Dc_OYARaCh71e6PCo'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
        },
        (error) => {
          console.log(error.text)
        }
      )
    event.currentTarget.reset()
    alert('Message sent')
  }

  const getJoke = () => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: {
          accept: 'application/json'
        }
      })
      .then((res) => setJoke(res.data.joke))
  }

  return (
    <section id="contact">
      <div className="flex flex-col w-full items-center mt-3">
        <PhoneIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Contact
        </h1>
      </div>
      <div className=" flex  md:flex-row flex-col">
        <div className="lg:w-1/2 sm:w-full flex flex-col md:mr-auto md:py-8 mt-8 md:mt-0 md:ml-4 sm:items-center md:items-start">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Fun API&apos;s
          </h2>
          <div className="flex flex-col justify-evenly h-full">
            <div className=" mb-4 flex flex-col sm:items-center md:items-start">
              <div>
                <h3 className="text-white sm:text-2xl text-1xl mb-1 font-medium title-font">
                  Kanye West Famous Quotes
                </h3>
                {quote ? (
                  <p>{quote}</p>
                ) : (
                  <p> The thought police want to suppress freedom of thought</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => getQuote()}
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-green-600 rounded text-lg sm:w-1/3 md:w-auto justify-center"

              >
                {quote ? 'New' : 'Get'}
                {' '}
                Quote
              </button>
            </div>
            <div className=" mb-4 flex flex-col sm:items-center md:items-start">
              <div>
                <h3 className="text-white sm:text-2xl text-1xl mb-1 font-medium title-font">
                  Random Joke
                </h3>
                {joke ? (
                  <p>{joke}</p>
                ) : (
                  <p>
                    {' '}
                    What did the wall say to the other wall? Meet you in the
                    corner.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => getJoke()}
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mt-5 focus:outline-none hover:bg-green-600 rounded text-lg sm:w-1/3 md:w-auto justify-center"

              >
                {joke ? 'New' : 'Get'}
                {' '}
                Joke
              </button>
            </div>
          </div>
        </div>

        <form
          name="contact"
          className="lg:w-1/2 md:w-1/2 flex justify-center flex-col md:ml-auto w-full sm:py-3 mt-8 md:mt-0 sm:px-4"
          onSubmit={sendEmail}
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let&apos;s Talk!
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
              <input
                type="text"
                id="name"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </label>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
              <input
                type="email"
                id="email"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </label>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
