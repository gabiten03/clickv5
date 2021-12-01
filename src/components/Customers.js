import React from 'react'
import { Grid, Box, Flex } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { chakra } from '@chakra-ui/system'
import { motion } from 'framer-motion'

function Customers() {
    return (

        <Flex

            bg={useColorModeValue("brand.500")}
            px={8}
            py={24}
            mx="auto"
            justifyContent="center"
            alignContent="center"
        >
            <Box
                w={"full"}
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
                    mx="auto"
                    alignContent="center"
                >

                    <chakra.span

                        color={useColorModeValue("black.200", "gray.500")}

                        alignContent="center"
                        mx="auto"
                    >
                        Ultimos Trabajos
                    </chakra.span>
                </chakra.h2>
                <Grid templateColumns='repeat(5, 1fr)' gap={6} margin={20}>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Box w='100%' h='100' rounded="lg"
                            shadow="2xl" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >

                        <Box w='100%' h='100' rounded="lg"
                            shadow="2xl" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Box w='100%' h='100' rounded="lg"
                            shadow="2xl" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Box w='100%' h='100' rounded="lg"
                            shadow="2xl" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Box w='100%' h='100' rounded="lg"
                            shadow="2xl" />
                    </motion.div>

                </Grid>
            </Box>

        </Flex>
    )
}

export default Customers
