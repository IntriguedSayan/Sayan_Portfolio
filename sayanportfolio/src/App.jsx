import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import About from './Page/About'
import Projects from './Page/Projects'
import Start from './Page/Start'

function App() {
  

  return (
    <Box  backgroundColor={"#1a202c"} >
      <Start/>
      <About/>
      <Projects/>
    </Box>
        
  )
}

export default App
