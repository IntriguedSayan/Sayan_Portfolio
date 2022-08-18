import {
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,
    useDisclosure,
    Box,
    Text,
  } from '@chakra-ui/react'
import { useRef } from 'react'
import "./DrawerSet.css"

export default function DrawerSet({buttonName}){
    const { isOpen, onOpen, onClose } = useDisclosure ()
    const btnRef = useRef ()
    

    return (
      <Box>
        <Button ref={btnRef} colorScheme="cyan" size={"lg"} onClick={onOpen}>
          {buttonName}
        </Button >
        <Box >
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        
        >
          <DrawerOverlay />
          <DrawerContent backgroundImage={'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'}>
            
            <Box className="bodybox">
            <DrawerCloseButton />
            <DrawerHeader>MENU</DrawerHeader>
            
            <DrawerBody  className="drawer">
            <Text className="drawerMenuOne" fontSize={"x-large"} backgroundColor="transparent" mt={"15%"} p={"4%"}>About Me</Text>
            <Text className="drawerMenuTwo" fontSize={"x-large"} backgroundColor="transparent" mt={"15%"} p={"4%"}>Projects</Text>
            <Text className="drawerMenuThree" fontSize={"x-large"} backgroundColor="transparent" mt={"15%"} p={"4%"}>Skills & TechStacks</Text>
            <Text className="drawerMenuFour" fontSize={"x-large"} backgroundColor="transparent" mt={"15%"} p={"4%"}>Contact Info</Text>
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
            </Box>
          </DrawerContent>
        </Drawer>
        </Box>
      </Box>
    )
  }

  // backgroundColor={" #50E3C2;"} backgroundImage={"radialGradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%)"}