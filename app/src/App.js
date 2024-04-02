// Components
import PersonList from './components/list'

import './App.css'

function App() {
  const people = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Davi' }
  ]

  const user = 'Davi'

  return (
    <div className="App">
      <h1>Hello {user}</h1>
      <PersonList people={people}/>
    </div>
  )
}

export default App
