import { Box, Flex, Image, Text } from "@chakra-ui/react";
import DrawerSet from "../Components/DrawerSet";
import sayan from "../assets/sayan.jpeg"
import "./About.css"

export default function About(){

    return(
        <Box border={"1px solid red"} >
            <Box  display="inline-block" m={"4% 0 0 90%"}>
            <DrawerSet buttonName={"MENU"}/>
            </Box>
            <Text fontSize={"5xl"} m="-6% 0 2% 40%" color={"white"} >About Me</Text>
            <Box width={"20%"} m="2% 0 0% 38%">
            <Image src={sayan}  height={"35%"} borderRadius="25%0" alt="Profile Pic" />
            </Box>
            
            
            <Box>
                <Flex fontSize={"4xl"} fontWeight="bold" m="2% 0 1% 25%" color={"white"}>Hi, I am  <Text className="gradien" m={"0 1% 1% 1%"}>  Sayan Mukherjee,</Text> a <Text m={"0 1% 1% 1%"} className="gradien"> MERN Developer</Text></Flex>
                <Box  width={"50%"} m="1% 0 1% 25%">
                <Text fontSize={"x-large"} color="white" fontWeight={"bold"}>I am passionate Full Stack Web Developer adept at engineering robust and user centric web applications. I love to work in exciting projects while being exposed to ever evolving technology around us.</Text>
                </Box>
                <Text></Text>
            </Box>
            
        </Box>
    )
}