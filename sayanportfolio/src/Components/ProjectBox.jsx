import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import CarouselComp from "./CarouselComp";
import ProjectDesc from "./ProjectDesc";


export default function ProjectBox({firstSlide,secondSlide,thirdSlide,fourthSlide,
    projectName,descOne,descTwo,descThree,descFour,techOne,techTwo,techThree,color,jsIcon,d1,d2,techFive,d3,website,gitrepo}){

    return(
        <Flex width={"85%"} m={"2% 0 2% 10%"} padding="0 2% 0 2%" gap={"4%"} border="1px solid white" justify={"space-between"}>
                    <Box p={"2% 1% 2% 2%"} width="50%" height={"60%"}>
                    <CarouselComp firstSlide={firstSlide} secondSlide={secondSlide}
                     thirdSlide={thirdSlide} fourthSlide={fourthSlide}/>
                     <Flex justify={"space-around"}>
                     <Icon as={jsIcon} width="15%" display={d1} height={"20%"} m="10% 0 0 0" color={color} />   
                     <Image src={techOne}  width="15%" display={d2} height={"20%"} m="10% 0 0 0"/>
                     <Icon as={techFive} width="15%" h={"15%"} color="cyan.500" mt={"10%"} display={d3} />
                     <Icon as={techTwo} w={"15%"} h={"20%"} m={"10% 0 0 0"} color="red.500" />
                     <Icon as={techThree} w={"18%"} h={"20%"} m={"8.66% 0 0 0"} color="blue.500" />
                     </Flex>
                    </Box>
                    <Box className="descbox" width={"50%"}>
                       <ProjectDesc projectName={projectName} descOne={descOne} descTwo={descTwo}
                       descThree={descThree}
                       descFour={descFour}
                       website={website}
                       gitrepo={gitrepo}/>
                    </Box>
        </Flex>
    )
}