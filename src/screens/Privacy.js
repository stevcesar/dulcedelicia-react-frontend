import React from 'react';
import Head from '../components/Head';
import Layout from '../layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Política de Privacidad" />
        <div className="bg-white my-12">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Ultima actualización: Marzo 25, 2023
            </h2>
            <div className="font-sans leading-7">
              <p>
              En Dulce Delicia, tu privacidad es importante para nosotros. 
              Este documento de Política de Privacidad explica cómo recopilamos 
              y utilizamos la información proporcionada por nuestros 
              visitantes en SweetDelights.com. Si tienes preguntas 
              adicionales o necesitas más detalles sobre nuestra 
              Política de Privacidad, no dudes en contactarnos.
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Consentimiento
            </h2>
            <div className="font-sans leading-7">
              <p>
                Al utilizar nuestro sitio web, por la presente 
                usted acepta nuestra Política de Privacidad
                y aceptar sus términos.
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Información recopilada
            </h2>
            <div className="font-sans leading-7">
              <p>
              Podemos recopilar información personal, como tu nombre, 
              dirección de correo electrónico, número de teléfono, y
               cualquier otro detalle que elijas proporcionar. 
               Cuando te registras para una cuenta, es posible que 
               te solicitemos información de contacto, como tu nombre, 
               dirección, dirección de correo electrónico y número de teléfono.
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              ¿Cómo usamos tu información?
            </h2>
            <div className="font-sans leading-7">
              <p>
               Usamos la información que recopilamos de varias maneras, incluyendo para:
              </p>

              <ol>
                <li>
                  1. Proporcionar, operar y mantener nuestro sitio web, para brindarle
                  con actualizaciones y otra información.
                </li>
                <li>
                  2. Mejorar, personalizar y ampliar nuestro sitio web y otros
                  información relativa al sitio web.
                </li>
                <li>
                  3. Comprender y analizar cómo utiliza nuestro sitio web, para proporcionarle
                  usted con actualizaciones y otra información relacionada con el
                  sitio web.
                </li>
                <li>
                  4. Desarrollar nuevos productos, servicios, características y
                  funcionalidad y otra información relacionada con el sitio web.
                </li>                
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
            Contacto
            </h2>
            <div className="font-sans leading-7">
              <p>
              Si tienes alguna pregunta sobre nuestra Política de Privacidad o deseas 
              acceder o eliminar tus datos personales, no dudes en 
              ponerte en contacto con nosotros.
              </p>
            </div>
          </div>                
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
