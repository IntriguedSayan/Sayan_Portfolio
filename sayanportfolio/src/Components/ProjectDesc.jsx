import { Box, Flex, Image, Text,List,ListItem,ListIcon,OrderedList,UnorderedList, } from "@chakra-ui/react";
import {SettingsIcon} from "@chakra-ui/icons"
import "../Page/Projects.css"
import "./ProjectDesc.css"

export default function ProjectDesc({projectName,descOne,descTwo,descThree,descFour}){

    return(
        <>
        <Text className="title" fontSize={"4xl"} color="white" mb={"2%"}>{projectName}</Text>
                        <List spacing={4}>
                            <ListItem fontSize={"x-large"} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descOne}
                                 
                            </ListItem>
                            <ListItem fontSize={"x-large"} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descTwo}
                                
                            </ListItem> 
                            <ListItem fontSize={"x-large"} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descThree}
                                 
                            </ListItem> 
                            <ListItem fontSize={"x-large"} color="white">
                                <ListIcon as={SettingsIcon} color="white"/>
                                 {descFour}
                               
                            </ListItem>
                        </List>
                        <Flex justify={"space-evenly"}>
                        <Text className="linktext" width={"50%"} mb={"2%"} fontSize={"large"}><a href="" target="_blank">VIEW WEBSITE</a></Text>
                        <Text className="linktext" width={"50%"} mb={"2%"} fontSize={"large"}><a href="" target="_blank">GITHUB REPO</a></Text>
                        </Flex>
        </>
    )
}