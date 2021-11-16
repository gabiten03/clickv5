import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,


} from '@chakra-ui/react';

import TypeWriterEffect from 'react-typewriter-effect';
import { useColorModeValue, useColorMode } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";
import Logo from "../assets/img/logo.png";
import Logo2 from "../assets/img/logolight.png";
import '../translations/i18n';

export default function Hero() {
    const { t } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Image src={isDark ? Logo : Logo2} alt="logo" />
                <Heading>

                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Segoe UI',
                            fontWeight: 800,
                            fontSize: '1.8em',
                        }}

                        cursorColor={useColorModeValue('black', 'white')}
                        typeSpeed={120}
                        startDelay={1000}
                        multiTextDelay={2000}

                        multiText={[
                            'Transforma tu negocio',
                            'Mas que diseños, experiencias',
                            'Soluciones Digitales']}
                        multiTextLoop={true}
                    />
                </Heading>
                <Text color={'black.200'} maxW={'6xl'} fontSize={32} fontWeight="bold">
                    Sitios Web, E-Commence, Blogs, Chatbots, Diseños a Medida.
                </Text>

                <Button
                    rounded={'full'}
                    px={6}
                    bg={'orange.400'}
                    fontSize={24}
                    padding={8}
                    color={'white'}
                    _hover={{ bg: 'orange.500' }}>
                    Consultanos
                </Button>




            </Stack>
        </Container>
    );
}
