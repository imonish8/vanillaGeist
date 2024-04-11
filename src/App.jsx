import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Page, Text , Display, Image , Grid, Spacer , Divider} from '@geist-ui/core'
import { FileLambda , X, Cpu} from '@geist-ui/icons'
import './App.css'
import Home from './Home'
import Links from './Links'
import Info from './Info'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        
        <FileLambda size={120} inline />
        
        <X size={40} inlin w={.35}/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <X size={40} inlin w={.35}/>
        <Cpu size={120} inline/>
      </div>
      <Divider />
      <Text h1>Vanilla GeistReact</Text>
      <Divider />
      
      <Spacer h={2}/>
      
     

      <Home />
      <Divider />
      <Info />
      <Divider />
      <Links />
      <Divider />
   
    </>
  )
}

export default App
