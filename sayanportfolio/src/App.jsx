import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import About from './Page/About'
import Start from './Page/Start'

function App() {
  

  return (
    <Box  width="205vh" height={"400vh"}>
      <Start/>
      <About/>

    </Box>
        
  )
}

export default App
