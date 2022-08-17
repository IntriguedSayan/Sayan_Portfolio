import HeroLine from "../Components/HeroLine";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import "./Start.css"
import DrawerSet from "../Components/DrawerSet";

export default function Start(){

    return(
        <Flex justifyContent={"center"} m="5% 15% 0 0" alignItems="center">
        <Box width={"40%"} border="1px solid black">    
        <HeroLine/>
        <Text className="resume-text" fontSize={"2xl"}><a href="https://drive.google.com/file/d/18gy9rX-_VHUc5qo-4myKNR_A4jEm250d/view?usp=sharing" target="_blank">VIEW RESUME</a></Text>
        </Box>
        <Box border={"1px solid red"}>
        <DrawerSet/>
        </Box>
        </Flex>
    )
} 