import HeroLine from "../Components/HeroLine";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import "./Start.css"
import DrawerSet from "../Components/DrawerSet";

export default function Start(){

    return(
        <Flex justifyContent={"center" }h="100vh" alignItems="center">
        <Box width={"40%"}  >
        <Box className="strt"  width={"95%"} p="1% 1% 2% 3%">        
        <HeroLine/>
        </Box>
        <Text className="resume-text" fontSize={"2xl"}><a href="https://drive.google.com/file/d/18gy9rX-_VHUc5qo-4myKNR_A4jEm250d/view?usp=sharing" target="_blank">VIEW RESUME</a></Text>
        </Box>
        <Box>
        <DrawerSet buttonName={"GET STARTED"}/>
        </Box>
        </Flex>
    )
} 