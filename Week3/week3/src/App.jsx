import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextUpdater from './TextUpdater'
import Form from './Form'
import UserCard from './UserCard'
import Button from './Button'
import LoginForm from './LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4">
      <TextUpdater />
      <Form />
      <UserCard name="John Doe" email="john.doe@example.com" />
      <Button>Click Me</Button>
      <LoginForm />
    </div>
  )
}

export default App