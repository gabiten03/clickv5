import React from "react";
import {
    chakra,
    Box,
    Stack,
    Flex,
    useColorModeValue,
    Link,
    Button
} from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Error() {
    return (
        <Flex
            bg={useColorModeValue(" rgb(100,0,123)", "#1A202C")}
            p={100}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                justify="center"

                w="full"
            >
                <Box
                    w={{ base: "full", md: "75%", lg: "50%" }}
                    px={4}
                    py={20}
                    textAlign={{ base: "left", md: "center" }}
                >
                    <chakra.span
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                        color={useColorModeValue("white", "gray.100")}
                        mb={6}
                    >
                        <chakra.span display="block">UPPS!! Algo no salió del todo bien!!!</chakra.span>
                        <chakra.span
                            display="block"
                            color={useColorModeValue("brand.600", "gray.500")}
                        >
                            La página que intentas acceder no existe.
                        </chakra.span>
                    </chakra.span>
                    <Stack
                        justifyContent={{ base: "left", md: "center" }}
                        direction={{ base: "column", sm: "row" }}
                        spacing={2}
                        mt={2}
                    >
                        <Link
                            textDecoration="none"
                            href="/"
                        >
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                            >

                                <Button

                                    textDecoration="none"
                                    variant="ghost"
                                    border="1px"
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"

                                    w={{ base: "auto", sm: "auto" }}
                                    mb={{ base: 2, sm: 0 }}
                                    _hover={{ bg: "unset" }}
                                    _active={{ bg: "unset" }}

                                    margin='14px'
                                    size="lg"
                                    cursor="pointer"
                                    color={useColorModeValue("white")}
                                    rounded="full"

                                >
                                    Volver al inicio

                                </Button>

                            </motion.div>
                        </Link>


                    </Stack>
                </Box>
            </Flex>
        </Flex >
    );
}