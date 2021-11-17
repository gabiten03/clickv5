import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Button,
    Stack,
    Text,
    Icon,
    ModalOverlay,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    Modal,
    ModalFooter,
    useDisclosure,
    Heading
} from "@chakra-ui/react";

import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,
    TextareaControl
} from "formik-chakra-ui";

import * as Yup from "yup";
import Typewriter from 'typewriter-effect';

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


const Hero2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box px={8} py={24} mx="auto">
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
            >

                <chakra.h1
                    mb={6}
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{ base: "normal", md: "tight" }}
                    color="linear(to-r, green.400,purple.500)"
                >


                    No creamos {" "}
                    <Text
                        display={{ base: "block", lg: "inline" }}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, green.400,purple.500)"
                        fontWeight="extrabold"
                    >
                        solo diseños,
                    </Text>{" "}
                    creamos experiencias.
                </chakra.h1>
                <chakra.h3
                    px={{ base: 0, lg: 24 }}
                    mb={6}
                    fontWeight="bold"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color={useColorModeValue("black", 'white')}
                >


                    <Typewriter
                        options={{
                            strings: ['Diseños Creativos e Inteligentes', 'Sitios Web, Ecommerce´s , Blog´s', 'Transforma tu negocio'],
                            autoStart: true,
                            loop: true,
                            delay: 150,
                            deleteSpeed: 30,
                            color: "linear(to-r, green.400,purple.500)",


                        }}
                    />
                </chakra.h3>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    mb={{ base: 4, md: 8 }}
                    spacing={2}
                    justifyContent={{ sm: "left", md: "center" }}
                >
                    <Button
                        as="a"
                        variant="solid"
                        bg="violet"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        w={{ base: "full", sm: "auto" }}
                        mb={{ base: 2, sm: 0 }}
                        size="lg"
                        cursor="pointer"
                        color='white'
                        onClick={onOpen}
                    >
                        Consultar
                        <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </Icon>
                    </Button>

                </Stack>
            </Box>
            <Box
                w={{ base: "full", md: 10 / 12 }}
                mx="auto"
                mt={20}
                textAlign="center"
            >

            </Box>
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
                                    <Heading>Estaríamos felices de escuchar de vos !!!</Heading>
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
        </Box>
    );
};

export default Hero2;