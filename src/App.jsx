import Home from './components/Home'
import Projects from './components/Projects/Project'
import './tailwind.css'

function App() {
  return (
    <div className='text-gray-400 bg-gray-900 body-font'>
      <Home />
      <Projects/>
    </div>
  )
}

export default App
