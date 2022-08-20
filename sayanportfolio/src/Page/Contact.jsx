import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons"
import {MdEmail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import "./Skills.css"

export default function Contact(){

    return(
        <Box height={"100vh"} >
                <a id="CONTACT"></a><Text className="headertext" fontSize={"5xl"}  color="white" m={"5% 0 5% 15%"}>Get in Touch</Text>
                <Flex  width={"35%"} gap="5%" m="1% 0 2% 15%">
                    <PhoneIcon color={"white"} fontSize="2xl" mt={"1.7%"} />  
                    <Text fontSize={"2xl"} color="white"><a href="tel:+91-9123747665">+91 9123747665</a></Text>
                </Flex>
                <Flex  width={"35%"} gap="5%" m="1% 0 2% 15%">
                    <Icon as={MdEmail} color="white" fontSize={"3xl"} mt={"1.5%"}/>
                    <Text fontSize={"2xl"} color="white" ><a href="mailto:sayan.mid590@gmail.com">sayan.mid590@gmail.com</a></Text>
                </Flex>
                <Flex  width={"35%"} gap="5%" m="1% 0 2% 15%">
                    <Icon as={BsLinkedin} color="white" fontSize={"3xl"} mt={"1.5%"}/>
                    <Text fontSize={"2xl"} color="white" ><a href="https://www.linkedin.com/in/sayan-mukherjee-5678b2232/" target={"_blank"}>LinkedIn</a></Text>
                </Flex>
                <Flex  width={"35%"} gap="5%" m="1% 0 2% 15%">
                    <Icon as={BsGithub} color="white" fontSize={"3xl"} mt={"1.5%"}/>
                    <Text fontSize={"2xl"} color="white" ><a href="https://github.com/IntriguedSayan"  target={"_blank"}>GitHub</a></Text>
                </Flex>
        </Box>
    )
}