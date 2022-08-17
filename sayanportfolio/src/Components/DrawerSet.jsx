import {
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,
    useDisclosure,
    Box,
    Text,
  } from '@chakra-ui/react'
import { useRef } from 'react'
import "./DrawerSet.css"

export default function DrawerSet(){
    const { isOpen, onOpen, onClose } = useDisclosure ()
    const btnRef = useRef ()
    

    return (
      <Box>
        <Button ref={btnRef} colorScheme="cyan" size={"lg"} onClick={onOpen}>
          GET STARTED 
        </Button >
        <Box >
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MENU</DrawerHeader>
            
            <DrawerBody  className="drawer">
            <Text className="drawerMenuOne" fontSize={"x-large"} backgroundColor="ButtonHighlight" mt={"15%"} p={"4%"}>About Me</Text>
            <Text className="drawerMenuTwo" fontSize={"x-large"} backgroundColor="ButtonHighlight" mt={"15%"} p={"4%"}>Projects</Text>
            <Text className="drawerMenuThree" fontSize={"x-large"} backgroundColor="ButtonHighlight" mt={"15%"} p={"4%"}>Skills & TechStacks</Text>
            <Text className="drawerMenuFour" fontSize={"x-large"} backgroundColor="ButtonHighlight" mt={"15%"} p={"4%"}>Contact Info</Text>
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </Box>
      </Box>
    )
  }