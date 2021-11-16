import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Text,

} from "@chakra-ui/react";

export default function About2() {

    const bottomBg = useColorModeValue("white", "gray.800");
    return (
        <Flex
            boxSize="full"
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            paddingY={10}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
                rounded="md"
                shadow="base"
                w="full"
                minHeight='30vh'
                bg={bottomBg}
            >
                <Box pt={20} rounded="md" marginX={20}>
                    <Box w="full" px={[10, , 4]} py={20} mx="auto">

                        <Text
                            mb={2}
                            fontSize={["2xl", , "5xl"]}
                            fontWeight="bold"
                            lineHeight="tight"
                            color={useColorModeValue("gray.600", 'white.300')}
                            paddingBottom={10}
                        >
                            Quienes somos?
                        </Text>
                        <chakra.p
                            px={{ base: 0, lg: 24 }}
                            mb={6}
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.600", 'gray.300')}
                        >
                            Somos un grupo de profesionales especializados en diseño Web y nuevas tecnologías.
                            Producimos diseños de alta calidad a partir de tus necesidades, para que puedas diferenciarte.
                            Para los que entienden que los detalles no son solo detalles, sino que son parte esencial del diseño.
                        </chakra.p>
                    </Box>

                </Box>
            </Box>
        </Flex >
    );
}