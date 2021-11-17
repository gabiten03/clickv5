import * as React from "react";

import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Link, Heading, Image } from "@chakra-ui/react";
import { Flex, VStack, Spacer, Grid } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaEnvelope } from 'react-icons/fa'
/* import { Us, Es } from 'react-flags-select'; */
import Logo from "../assets/img/logo.png";
import Logo2 from "../assets/img/logolight.png";

/* import i18n from '../translations/i18n' */



import { Box, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, Modal, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,
    TextareaControl
} from "formik-chakra-ui";



import * as Yup from "yup";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
    sleep(300).then(() => {
        window.alert(JSON.stringify(values, null, 2));
    });
};

const initialValues = {
    name: "",


    notes: "",

};
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),
    notes: Yup.string()
        .max(250, 'Demasiado Largo!')
        .required('Requerido'),
    email: Yup.string().email('Mail Invalido').required('Requerido'),

});

function Header() {
    /*  let value; */
    /* const [language, setLanguage] = useState('es'); */

    /*     const handleOnclick = (e) => {
            e.preventDefault();
            if (language === 'es') { value = 'en' } else { value = 'es' }
            setLanguage(value);
            i18n.changeLanguage(language);
        } */
    /*    const isLang = language === "en"; */
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <>
            <Grid >
                <VStack p={5}>
                    <Flex w="100%" margin={5}>
                        <Heading marginLeft={15}
                            ml="8" size="md" fontWeight='semibold' color="cyan.800">
                            <Link ml={8} href="/" isExternal>
                                <Image src={isDark ? Logo : Logo2} alt="logo" />
                            </Link>
                        </Heading>
                        <Spacer></Spacer>

                        <IconButton onClick={onOpen} icon={<FaEnvelope />} isRound='true' ></IconButton>



                        {/*  <IconButton ml={8} icon={isLang ? <Es /> : <Us />} isRound='true' onClick={handleOnclick}>
                        </IconButton> */}
                        <IconButton ml={8} mr={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                    </Flex>

                </VStack>

            </Grid>

            <Modal isOpen={isOpen} onClose={onClose} size="full"  >
                <ModalOverlay />
                <ModalContent>

                    <ModalCloseButton size="lg" color="#4e4edd" />

                    <ModalBody marginTop={20}>


                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {({ handleSubmit, values, errors }) => (
                                <Box

                                    maxWidth={800}
                                    p={6}
                                    m="10px auto"
                                    as="form"
                                    onSubmit={handleSubmit}
                                >
                                    <Heading>Estaría feliz de escuchar de vos !!!</Heading>
                                    <InputControl marginY={3} name="name" label="Nombre" />
                                    <InputControl marginY={3} name="email" label="Email" />
                                    <TextareaControl marginY={3} name="notes" label="Mensaje" />
                                    <ModalFooter>
                                        <SubmitButton colorScheme="blue" marginY={8} marginX={6}>Enviar</SubmitButton>

                                        <Button colorScheme="blue" onClick={onClose} variant="outline">Cerrar</Button>

                                    </ModalFooter>

                                </Box>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
    )
}

export default Header