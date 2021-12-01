import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
    Box,
    Button,
    chakra,
    Flex,
    useColorModeValue,
    Image,

    Stack


} from "@chakra-ui/react";

import Image1 from "../assets/img/disenoweb.jpg";
import Image2 from "../assets/img/chatbot1.jpg";
import Image3 from "../assets/img/diseno-a-medida1.jpg";

const squareVariants = {
    visible: { opacity: 1, transition: { type: "spring", duration: 5 }, treshold: '.8' },
    hidden: { opacity: 0 }
};

export default function SidebySide({ title, description, image, ...props }) {
    let imageitem = Image1
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }

    }, [controls, inView]);

    switch (image) {
        case 1:
            imageitem = Image1;
            break;
        case 2:
            imageitem = Image2;
            break;
        case 3:
            imageitem = Image3;
            break;
        default:
            break;
    }

    return (


        <Flex
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("brand.500")}
            px={8}
            py={24}
            mx="auto"
        >
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                pr={{ md: 20 }}
                marginBottom={{ base: 4, md: 6 }}
            >
                <chakra.h2
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                    color={useColorModeValue("black.200", "gray.500")}
                    mb={6}
                >

                    <chakra.span
                        display="block"
                        color={useColorModeValue("black.200", "gray.500")}
                    >
                        {title}
                    </chakra.span>
                </chakra.h2>
                <chakra.p
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    color={useColorModeValue("black.200", "gray.300")}
                >
                    {description}
                </chakra.p>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    mb={{ base: 4, md: 8 }}
                    spacing={2}
                >
                    <Box display="inline-flex" >
                        <motion.div

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}

                        >
                            <Button
                                as="a"
                                variant="ghost"
                                border="2px"

                                display="inline-flex"
                                alignItems="center"
                                justifyContent="center"
                                w={{ base: "auto", sm: "auto" }}
                                mb={{ base: 2, sm: 0 }}
                                _hover={{ bg: "unset" }}

                                margin='24px'
                                size="lg"
                                cursor="pointer"
                                color={useColorModeValue("violet", "white")}
                                rounded="full"


                            >
                                Consultar
                            </Button>
                        </motion.div>
                    </Box>
                </Stack>
            </Box>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                className="square"
            >
                <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
                    <Image
                        w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={imageitem}
                        alt={image} />
                </Box>
            </motion.div>
        </Flex>

    );
};