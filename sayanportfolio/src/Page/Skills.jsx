import { Box, Flex, Image, Text } from "@chakra-ui/react";
import DrawerSet from "../Components/DrawerSet";
import chakra from "../assets/SVGs/chakraui.svg"
import css from "../assets/SVGs/css.svg"
import git from "../assets/SVGs/git-icon.svg"
import html from "../assets/SVGs/html5.svg"
import js from "../assets/SVGs/js-official.svg"
import material from "../assets/SVGs/material-ui.svg"
import mongodb from "../assets/SVGs/mongodb-logo.svg"
import nodejs from "../assets/SVGs/nodejs-1-logo.svg"
import redux from "../assets/SVGs/redux-logo-svgrepo.svg"
import react from "../assets/react.svg"
import bootstrap from "../assets/SVGs/bootstrap-4-logo.svg"
import "./Skills.css"

export default function Skills(){

    return(
        <Box >
            <Box  display="inline-block" m={"17% 0 0 90%"}>
            <DrawerSet buttonName={"MENU"}/>
            </Box>
           <a id="SKILLS"><Text className="headertext" fontSize={"5xl"} fontWeight="bold" m="2% 0 4% 15%" color="white">Skills & TechStacks</Text></a>
           {/* 1st row */}
           <Flex  width="70%" m={"auto"} justify="space-evenly">
           <Box width="25%">
            <Image src={html} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>HTML5</Text>
           </Box>
           <Box  width="25%">
            <Image src={css} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>CSS3</Text>
           </Box>
           <Box  width="25%">
            <Image src={js} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>JavaScript</Text>
           </Box>
           <Box  width="25%">
            <Image src={react} width="60%" height={"60%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>React</Text>
           </Box>
           </Flex>
            {/* 2nd row */}
           <Flex  width="70%" m={"auto"} justify="space-evenly">
            <Box  width="25%">
            <Image src={redux} width="50%" height={"50%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>Redux</Text>
           </Box>
           <Box  width="25%">
            <Image src={chakra} width="50%" height={"50%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>Chakra-UI</Text>
           </Box>
           <Box  width="25%">
            <Image src={material} width="50%" height={"50%"} m="auto" />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>Material-UI</Text>
           </Box>
           <Box  width="25%">
            <Image src={bootstrap} width="50%" height={"50%"} m="auto"mr={"14%"} />
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"} ml="7%">Bootstrap</Text>
           </Box>
           </Flex>
           {/* 3rd row */}
           <Flex  width="70%" m={"auto"}>
           <Box  width="25%">
            <Image src={nodejs} width="50%" height={"50%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>NODE JS</Text>
           </Box>
           <Box  width="25%">
            <Image src={mongodb} width="60%" height={"60%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"0%"}>MONGO DB</Text>
           </Box>
           <Box  width="25%">
            <Image src={git} width="50%" height={"50%"} m="auto"/>
            <Text fontSize={"large"} color="white" textAlign={"center"} fontWeight="bold" mt={"5%"}>GIT</Text>
           </Box>
           </Flex>
        </Box>
    )

}