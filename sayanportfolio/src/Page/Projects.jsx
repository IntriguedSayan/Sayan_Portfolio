import { Box, Flex, Image, Text,List,ListItem,ListIcon,OrderedList,UnorderedList, } from "@chakra-ui/react";
import DrawerSet from "../Components/DrawerSet";
import ScreenshotOne from "../assets/YooxScreenshots/Screenshot (669).png" 
import ScreenshotTwo from "../assets/YooxScreenshots/Screenshot (670).png"
import ScreenshotThree from "../assets/YooxScreenshots/Screenshot (671).png"
import ScreenshotFour from "../assets/YooxScreenshots/Screenshot (672).png"
import decssOne from "../assets/DeccanChronicle/Screenshot (673).png"
import decssTwo from "../assets/DeccanChronicle/Screenshot (674).png"
import decssThree from "../assets/DeccanChronicle/Screenshot (676).png"
import decssFour from "../assets/DeccanChronicle/Screenshot (678).png"
import cart from "../assets/Nature'sBasket/cart.png"
import home from "../assets/Nature'sBasket/home.png"
import offer from "../assets/Nature'sBasket/offer.png"
import signUp from "../assets/Nature'sBasket/sign-up.png"
import "./Projects.css"
import ProjectBox from "../Components/ProjectBox";
import rsvg from "../assets/react.svg"
import {ImHtmlFive} from "react-icons/im"
import {DiCss3} from "react-icons/di"
import {DiJavascript1} from "react-icons/di"

export default function Projects(){

    return(
        <Box>
            <Box border={"1px solid red"} display="inline-block" m={"5% 0 0 90%"}>
            <DrawerSet buttonName={"MENU"}/>
            </Box>
            <Text fontSize={"6xl"} color="white" m="2% 0 0 20%">Projects</Text>
            <Text fontSize={"large"} color="white" m="0 0 2% 20.4%" >Each of the Project has it's own flavour</Text>
            <Box   >
                <ProjectBox firstSlide={ScreenshotOne} secondSlide={ScreenshotTwo} thirdSlide={ScreenshotThree} fourthSlide={ScreenshotFour} projectName={"YOOX Clone"} descOne={"Individual Project"} descTwo={"Created Homepage,LogIn page,SignUp page."} descThree={"Built Multiple Product Pages & a Dynamic Cart."} descFour={"In Product page & Cart Pages everything is managed through APIs."} techOne={rsvg} techTwo={ImHtmlFive} techThree={DiCss3}  />

               <ProjectBox firstSlide={decssOne} secondSlide={decssTwo} thirdSlide={decssThree} fourthSlide={decssFour} projectName={"Deccan Chronicle Clone"}
               descOne={"Group Project completed within 5 days with 4 other team members."}
               descTwo={"Created Multiple detailed news outlet pages."}
               descThree={"Built Every top half of the news outlet pages including the cartoon section and Home page."} 
               descFour={"All news data was managed through APIs."} jsIcon={DiJavascript1} color={"yellow.500"} techTwo={ImHtmlFive} techThree={DiCss3}/>

               <ProjectBox firstSlide={home} secondSlide={offer} thirdSlide={cart} fourthSlide={signUp} projectName={"Nature's Basket Clone"}
               descOne={"Group Project completed within 5 days with 3 other team members."}
               descTwo={"Created all the Product Pages,cart page."}
               descThree={"Built the LogIn SignUp system,multiple Product Pages."}
               descFour={"All the data in cart and product pages were managed by local storage."} jsIcon={DiJavascript1} color={"yellow.500"} techTwo={ImHtmlFive} techThree={DiCss3}/>
            </Box>
        </Box>
    )
}