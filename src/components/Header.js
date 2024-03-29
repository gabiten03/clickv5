import * as React from "react";
import { useState } from "react";
import { Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Link, Heading, Image } from "@chakra-ui/react";
import { Flex, VStack, Spacer, Grid } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaEnvelope } from 'react-icons/fa'
import { motion } from "framer-motion";
/* import { Us, Es } from 'react-flags-select'; */
import Logo from "../assets/img/logo.png";

import '../App.css';
/* import i18n from '../translations/i18n' */



import { Box, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, Modal, ModalFooter, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,
    TextareaControl,

} from "formik-chakra-ui";



import * as Yup from "yup";

import emailjs from 'emailjs-com'






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
    const [isSucess, setIsSucess] = useState(false)
    const [isError, setIsError] = useState(false)

    function SendEmail(object) {
        console.log(object)
        emailjs.send("service_tgsuj89", "template_k34sxy4", object, "user_5opBudnu20FmVIVaRFySw")
            .then((result) => {
                setIsSucess(true)
                setIsError(false)
            }, (error) => {
                setIsError(true)
                setIsSucess(false)
            })
    }
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <>
            <Grid bg={useColorModeValue(" rgb(100,0,123)", "#1A202C")}>
                <VStack p={5}>
                    <Flex w="100%" margin={5}>
                        <Heading marginLeft={15}
                            ml="8" size="md" fontWeight='semibold' color="cyan.800">
                            <Link href="/" isExternal>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={1}
                                >
                                    <Image src={Logo} alt="logo" />
                                </motion.div>
                            </Link>
                        </Heading>
                        <Spacer></Spacer>
                        <motion.div
                            whileHover={{ scale: 1.1 }}

                        >
                            <IconButton onClick={onOpen} icon={<FaEnvelope />} isRound='true' ></IconButton>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            drag
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            dragElastic={1}


                        >
                            <IconButton ml={6} mr={6} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>


                        </motion.div>
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
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    SendEmail(values)
                                    actions.setSubmitting(false)
                                }, 1000)
                            }}
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
                                    <Heading>Estaríamos felices de escuchar de vos !!!</Heading>
                                    <InputControl marginY={3} name="name" label="Nombre" />
                                    <InputControl marginY={3} name="email" label="Email" />
                                    <TextareaControl marginY={3} name="notes" label="Mensaje" />
                                    {isSucess ? <Text fontSize="lg" color="green">Mensaje enviado. Gracias por contactarnos !!!</Text> : null}
                                    {isError ? <Text fontSize="lg" color="red">Error al enviar el mensaje, intente nuevamente mas tarde</Text> : null}
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