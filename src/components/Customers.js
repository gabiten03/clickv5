import React from 'react'

import { Box, Flex, SimpleGrid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { chakra } from '@chakra-ui/system'
import { motion } from 'framer-motion'
import image1 from '../assets/img/1.png'
import image2 from '../assets/img/2.png'
import image3 from '../assets/img/3.png'
import image4 from '../assets/img/4.png'


const items = (item, width, paddingTop) => {
    paddingTop = parseInt(paddingTop)

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
        >
            <Box w='100%' h='100' margin={10}>

                <Image src={item} width={width}
                />
            </Box>
        </motion.div >
    )
}

function Customers() {
    return (

        <Flex
            bg={useColorModeValue("rgb(100,0,123)")}
            px={8}

        >
            <Box
                w={"full"}
                my={8}

                alignContent="center"
                alignItems="center"
                marginBottom={{ base: 4, md: 6 }}
            >
                <chakra.h2
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                    marginTop={20}

                    mx="auto"
                    textAlign="center"
                >

                    <chakra.span

                        color={useColorModeValue("white", "gray.500")}

                        alignContent="center"
                        alignItems="center"
                        mx="auto"
                    >
                        Ultimos Trabajos
                    </chakra.span>
                </chakra.h2>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
                    spacing={20}
                    px={{ base: 4, lg: 16, xl: 24 }}
                    py={20}
                    mx="auto"
                >

                    {items(image1, '60%', '-0')}
                    {items(image2, '40%', '0')}
                    {items(image3, '60%', '0')}
                    {items(image4, '100%', '0')}



                </SimpleGrid>
            </Box>

        </Flex >
    )
}

export default Customers
