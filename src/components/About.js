import React from 'react'
import { Box, Text, } from '@chakra-ui/react'
import { HStack, Flex } from '@chakra-ui/react'
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";
import '../translations/i18n';

import Plx from 'react-plx';

const parallaxData = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: .5,
                endValue: 1.3,
                property: 'scale',
            },
        ],
    },
];

const parallaxDatay = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: 400,
                endValue: 0,
                property: "translateY"
            },

        ],
    },
];
function About() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Box paddingY={10} bgGradient={isDark ? "linear(to-l, #aaaadb, #f0e5eañ)" : "linear(to-l, #7928CA, #FF0080)"}>
            <HStack justifyContent="center" paddingTop={10}>
                <Plx
                    parallaxData={parallaxData}
                    className='title'
                >
                    <Flex >
                        <Text

                            color={useColorModeValue('white', 'rgba(10, 10, 10, 0.9)')}
                            fontSize="4xl"
                            fontWeight="extrabold"
                            align="center"
                            paddingX={5}>

                            {t("abouttitle")}

                        </Text>

                    </Flex>
                </Plx>
            </HStack>

            <HStack justifyContent="center" paddingBottom={30}>

                <Flex w="60%">

                    <Plx
                        parallaxData={parallaxDatay}
                        className='title1'
                    >
                        <Text paddingTop={8}
                            paddingX={5}
                            align="center"
                            color={useColorModeValue('white', 'rgba(10, 10, 10, 0.9)')}
                            fontSize="3xl"
                        >
                            {t("abouttext")}


                        </Text>
                    </Plx>
                </Flex>

            </HStack>
        </Box>


    )
}

export default About