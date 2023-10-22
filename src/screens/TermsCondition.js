import React from 'react';
import Head from '../components/Head';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

const TermAndConditions = () => {
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Términos y Condiciones" />
        <div className="bg-white my-12">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Bienvenido a Dulce Delicia
            </h2>
            <div className="font-sans leading-7">
              <p>
              "Estos términos y condiciones describen las reglas y regulaciones 
              para el uso del sitio web de Dulce Delicia. Al acceder a este 
              sitio web, asumimos que aceptas estos términos y condiciones. Si
               no estás de acuerdo con todos los términos y condiciones 
               establecidos en esta página, te pedimos que no continúes 
               utilizando el sitio web de Dulce Delicia."
              </p>
              <p>
              La terminología siguiente se aplica a estos Términos y Condiciones, 
              Declaración de Privacidad y Aviso de Descargo de Responsabilidad, 
              y a todos los Acuerdos: "Cliente", "Tú" y "Tu" se refieren a ti, 
              la persona que ingresa a este sitio web y cumple con los términos 
              y condiciones de la Compañía. "La Compañía", "Nosotros", "Nosotras", 
              "Nuestro" se refiere a nuestra Compañía. "Parte", "Partes" o 
              "Nosotros" se refiere tanto al Cliente como a nosotros. 
              Todos los términos se refieren a la oferta, aceptación y 
              consideración de pago necesaria para llevar a cabo el 
              proceso de nuestra asistencia al Cliente de la manera 
              más adecuada para el propósito expreso de satisfacer las 
              necesidades del Cliente con respecto a la prestación de los servicios 
              declarados por la Compañía, de conformidad con y sujeto a la ley vigente en Guatemala. 
              Cualquier uso de la terminología anterior u otras palabras en singular, 
              plural, en mayúscula y/o él/ella o ellos, se considera intercambiable y, 
              por lo tanto, se refiere a lo mismo.
              </p>
            </div>
          </div>
          <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Almacenamiento Local
            </h2>
            <div className="font-sans leading-7">
              <p>
                Empleamos el uso de almacenamiento local. Al acceder a Dulce Delicia, 
                aceptas el uso de almacenamiento local de acuerdo con 
                la Política de Privacidad de Dulce Delicia. La mayoría de los 
                sitios web interactivos utilizan el almacenamiento 
                local para permitirnos recuperar los detalles del 
                usuario en cada visita. El almacenamiento local se utiliza 
                en nuestro sitio web para habilitar la funcionalidad 
                de ciertas áreas y facilitar la navegación de los visitantes. 
                Algunos de nuestros socios afiliados y de publicidad también 
                pueden utilizar el almacenamiento local.
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
              Licencia
            </h2>
            <div className="font-sans leading-7">
              <p>
              A menos que se indique lo contrario, Dulce Delicia y/o sus 
              licenciantes son propietarios de los derechos de propiedad 
              intelectual de todo el material en Sweet Delights. 
              Todos los derechos de propiedad intelectual están reservados. 
              Puedes acceder a este material en Sweet Delights para tu uso 
              personal, sujeto a las restricciones establecidas en estos términos 
              y condiciones. Este Acuerdo entrará en vigencia a partir 
              de la fecha de este documento. Nuestros Términos y Condiciones 
              fueron creados con la ayuda del Generador de Términos y Condiciones.
              </p>

              <ul>
                <strong className="mb-2">No debes:</strong>
                <li>
                  1. Identificadores (por ejemplo, nombre, dirección postal, dirección de correo electrónico,
                  número de teléfono, número de tarjeta de crédito/débito)
                </li>
                <li>
                  2. Características de las clasificaciones protegidas (por ejemplo, género,
                  edad)
                </li>
                <li>
                  3. Información comercial (por ejemplo, productos o servicios
                  comprado, historial de compras)
                </li>
                <li>
                  4. Internet u otra actividad de red electrónica (por ejemplo, navegar
                  o historial de búsqueda)
                </li>
                <li> 5. Datos de ubicación geográfica (por ejemplo, latitud o longitud)</li>
                <li>
                  6. Información sonora, electrónica, visual o similar (p. ej.
                  grabación de llamadas de servicio al huésped)
                </li>
              </ul>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold mb-2 lg:mb-4">
                Tu Privacidad
              </h2>
              <div className="font-sans leading-7">
                <p>
                  Por favor lee{' '}
                  <Link to="/policy" className="text-main">
                    Política de Privacidad
                  </Link>{' '}
                </p>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
