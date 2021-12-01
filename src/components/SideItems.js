import React from 'react'

import SidebySide from './SidebySide'

export default function SideItems() {
    const items = [{
        title: 'Diseño Web, E-Commerce , Blog', description: `Diseños únicos, elegantes, robustos, diseñados pensando en cada detalle.
    Superadaptables, permiten adaptarse a tus necesidades y que permitan futuras modificaciones.
            Responsivos, que se adaptan al tipo de dispositivo con el que se visita el sitio.
    Utilizamos los últimos estándares tecnológicos para sitios web.`, image: 1
    }, { title: 'Chatbot', description: 'Potencia la comunicación con tus clientes. Chatbots basados en inteligencia artificial te ayudarán a responder a las consultas de tus clientes al instante, los 365 días del año.', image: 2 }, { title: 'Diseño a medida', description: 'Te ayudamos a transformar tu negocios a través de la tecnología. Automatización de procesos, integración de aplicaciones y IoT, entre otros.', image: 3 }]

    return (
        <>
            {
                items.map((item, index) => {
                    return <SidebySide key={index} title={item.title} description={item.description} image={item.image} />
                })
            }
        </>
    )
}