// Components
import PersonList from './components/list'

import './App.css'

function App() {
  const people = {
    1: {name: 'Alice'},
    2: {name: 'Bob'},
    3: {name: 'Davi'}
  }

  const user = 'Davi'

  return (
    <div className="App">
      <h1>Hello {user}</h1>
      <PersonList people={people}/>
    </div>
  )
}

export default App
