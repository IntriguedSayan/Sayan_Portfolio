import { Box, Text } from "@chakra-ui/react";
import "./HeroLine.css"
export default function HeroLine(){

    return(
        <Box border={"1px solid red"} width="80%" m={"5% 0 0 0"}><Box fontSize={"5xl"}  fontWeight={"bold"}>Making use of<Text className="gradien">Creativity</Text> to solve<Text className="gradien">problems</Text> is my work.</Box></Box>
    )
}