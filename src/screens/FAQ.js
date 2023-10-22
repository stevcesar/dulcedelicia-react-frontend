import React from 'react';
import Head from '../components/Head';
import Layout from '../layout/Layout';
import { Disclosure } from '@headlessui/react';
import { FiChevronUp } from 'react-icons/fi';

function FAQPage() {
  const FAQData = [
    {
      title: '¿Cómo realizo un pedido en línea?',
      desc: 'Hacer un pedido es fácil. Navega por nuestra tienda en línea, selecciona los productos que desees y agrégalos a tu carrito de compras. Luego, sigue las instrucciones para completar tu pedido.',
    },
    {
      title: '¿Cuál es el tiempo de entrega?',
      desc: 'El tiempo de entrega varía según tu ubicación y la disponibilidad de productos. Por lo general, intentamos entregar los pedidos lo más rápido posible. Puedes verificar la estimación de entrega al finalizar la compra.',
    },
    {
      title: '¿Ofrecen opciones sin gluten o sin azúcar?',
      desc: 'Sí, ofrecemos opciones sin gluten y sin azúcar. Consulta nuestra sección de productos especiales para ver nuestras deliciosas alternativas.',
    },
    {
      title: '¿Puedo personalizar mi pastel?',
      desc: '¡Claro que sí! Ofrecemos opciones de personalización para muchos de nuestros pasteles. Contáctanos para discutir tus ideas y requisitos específicos.',
    },
    {
      title: '¿Cuál es su política de devoluciones?',
      desc: 'Estamos comprometidos con tu satisfacción. Si no estás satisfecho con tu pedido, por favor, ponte en contacto con nuestro servicio al cliente para resolver cualquier problema.',
    },
    {
      title: '¿Cómo se manejan las alergias alimentarias?',
      desc: 'Nos tomamos muy en serio las alergias alimentarias. Por favor, infórmanos acerca de cualquier alergia cuando realices tu pedido, y tomaremos precauciones adicionales para garantizar tu seguridad.',
    },
    {
      title: '¿Puedo programar entregas para eventos especiales?',
      desc: 'Sí, ofrecemos la opción de programar entregas para eventos especiales, como cumpleaños y aniversarios. Asegúrate de indicar la fecha y hora deseadas durante el proceso de compra.',
    },
  ];
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="FAQ" />
        <div className="bg-white">
          <div className=" lg:py-20 py-10 lg:px-4">
            <div className="flex-rows">
              <div className="lg:w-4/6 w-full flex flex-col gap-4">
                {FAQData.map((q, i) => (
                  <Disclosure as="div" key={i}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-main bg-gray-50 hover:bg-deepest rounded-lg focus:outline-none">
                          <span>{q.title}</span>
                          <FiChevronUp
                            className={`${
                              open ? 'transform rotate-180 text-main' : ''
                            } w-5 h-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                          {q.desc}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FAQPage;
