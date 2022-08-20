import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import About from './Page/About'

import Contact from './Page/Contact'
import Projects from './Page/Projects'
import Skills from './Page/Skills'
import Start from './Page/Start'

function App() {
  

  return (
    <Box  backgroundColor={"#1a202c"} >
      <Start/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      
    </Box>
        
  )
}

export default App
