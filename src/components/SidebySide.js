import React from "react";

import {
    Box,
    Button,
    chakra,
    Flex,
    SimpleGrid,
    useColorModeValue,
    Image,
    Text,


} from "@chakra-ui/react";

import Image1 from "../assets/img/disenoweb.jpg";
import Image2 from "../assets/img/chatbot1.jpg";

import Image3 from "../assets/img/diseno-a-medida1.jpg";


export default function SidebySide() {

    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            paddingBottom={10}
            w="full"
            justifyContent="center"
            alignItems="center"

        >
            <Box
                shadow="xl"
                bg={useColorModeValue("white", "gray.800")}
                px={8}
                py={20}
                mx="auto"
                textAlign={{ base: "center", md: "center" }}
            >
                <Text
                    mb={2}
                    alignItems="center"
                    fontSize={["2xl", "5xl"]}
                    fontWeight="bold"
                    lineHeight="tight"
                    color={useColorModeValue("black", 'white.300')}
                    paddingBottom={10}
                >
                    Nuestros servicios
                </Text>
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, md: 2 }}
                    mb={24}
                    marginX={20}
                    spacingY={{ base: 10, md: 32 }}
                    spacingX={{ base: 10, md: 24 }}
                >
                    <Box >
                        <chakra.h1
                            mb={4}
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="bold"


                            textAlign={{ base: "center", md: "left" }}
                            color={useColorModeValue("gray.900", "gray.400")}

                        >
                            Diseño Web, E-Commerce , Blog
                        </chakra.h1>
                        <chakra.p
                            mb={5}
                            textAlign={{ base: "center", sm: "left" }}
                            color={useColorModeValue("gray.600", 'gray.300')}
                            fontSize={["1xl", "2xl"]}
                            paddingBottom={6}
                        >
                            Diseños únicos, elegantes, robustos, diseñados pensando en cada detalle.
                            Superadaptables, permiten adaptarse a tus necesidades y que permitan futuras modificaciones.
                            Responsivos, que se adaptan al tipo de dispositivo con el que se visita el sitio.
                            Utilizamos los últimos estándares tecnológicos para sitios web.

                        </chakra.p>
                        <Button
                            w={{ base: "full", sm: "auto" }}
                            size="lg"

                            bg={useColorModeValue("violet", "violet")}
                            _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                            color={useColorModeValue("gray.100", "gray.200")}
                            as="a"

                        >
                            Consultar
                        </Button>
                    </Box>
                    <Box
                        w="full"
                        h="full"

                        bg={useColorModeValue("gray.200", "gray.700")}


                    > <Image src={Image1} /></Box>
                </SimpleGrid>
                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, md: 2 }}
                    flexDirection="column-reverse"
                    mb={24}
                    marginX={20}
                    spacingY={{ base: 10, md: 32 }}
                    spacingX={{ base: 10, md: 24 }}
                >
                    <Box order={{ base: "none", md: 2 }}>
                        <chakra.h1
                            mb={4}
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="bold"


                            textAlign={{ base: "center", md: "left" }}
                            color={useColorModeValue("gray.900", "gray.400")}
                            lineHeight={{ md: "shorter" }}
                            paddingBottom={6}
                        >
                            Chatbot
                        </chakra.h1>
                        <chakra.p
                            mb={5}
                            textAlign={{ base: "center", sm: "left" }}
                            color={useColorModeValue("gray.600", 'gray.300')}
                            fontSize={["1xl", "2xl"]}
                            paddingBottom={6}
                        >
                            Potencia la comunicación con tus clientes. Chatbots basados en inteligencia artificial te ayudarán a responder a las consultas de tus clientes al instante, los 365 días del año.
                        </chakra.p>
                        <Button
                            w={{ base: "full", sm: "auto" }}
                            size="lg"
                            bg={useColorModeValue("violet", "violet")}
                            _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                            color={useColorModeValue("gray.100", "gray.200")}
                            as="a"

                        >
                            Consultar
                        </Button>
                    </Box>
                    <Box
                        w="full"
                        h="full"

                        bg={useColorModeValue("gray.200", "gray.700")}
                    ><Image src={Image2} /></Box>
                </SimpleGrid>

                <SimpleGrid
                    alignItems="center"
                    columns={{ base: 1, md: 2 }}
                    mb={24}
                    spacingY={{ base: 10, md: 32 }}
                    spacingX={{ base: 10, md: 24 }}
                    marginX={20}
                >
                    <Box>
                        <chakra.h1
                            mb={4}
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight="bold"


                            textAlign={{ base: "center", md: "left" }}
                            color={useColorModeValue("gray.900", "gray.400")}

                        >
                            Diseño a medida
                        </chakra.h1>
                        <chakra.p
                            mb={5}
                            textAlign={{ base: "center", sm: "left" }}
                            color={useColorModeValue("gray.600", 'gray.300')}

                            paddingBottom={6}
                            fontSize={["1xl", "2xl"]}
                        >
                            Te ayudamos a transformar tu negocios a través de la tecnología. Automatización de procesos, integración de aplicaciones y IoT, entre otros.



                        </chakra.p>
                        <Button
                            w={{ base: "full", sm: "auto" }}
                            size="lg"
                            bg={useColorModeValue("violet", "violet")}
                            _hover={{ bg: useColorModeValue("violet.900", "violet.900") }}
                            color={useColorModeValue("white", "white")}
                            as="a"

                        >
                            Consultar
                        </Button>
                    </Box>
                    <Box
                        w="full"
                        h="full"

                        bg={useColorModeValue("gray.200", "gray.700")}


                    > <Image src={Image3} /></Box>
                </SimpleGrid>
            </Box>
        </Flex>
    );
}