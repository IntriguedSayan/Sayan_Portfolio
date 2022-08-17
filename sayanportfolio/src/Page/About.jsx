import { Box, Image } from "@chakra-ui/react";
import Name from "../Components/Name";

export default function About(){

    return(
        <Box border={"1px solid red"} >
            <Image src={"./Adobe Scan 03-Apr-2022_1.jpg"} />

            <Name/>
        </Box>
    )
}