import React from 'react';
import Head from '../components/Head';
import Layout from '../layout/Layout';

function AboutUs() {
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Head title="Dulce Delicia" />
        <div className="bg-white">
          <div className=" xl:p -20 pb-10 px-4">
            <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
              <div>
                <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                  Misión
                </h3>
                <div className="mt-3 text-base opacity-90 leading-7">
                  <p>
                    Buscamos crear delicias que alegran momentos especiales. 
                    Con ingredientes frescos y tecnología avanzada, 
                    llevamos dulzura directamente a tu puerta, 
                    añadiendo alegría a cada celebración.
                  </p>
                </div>
                <h3 className="text-xl lg:text-3xl mb-2 font-semibold mt-3">
                  Visión
                </h3>
                <div className="mt-3 text-base opacity-90 leading-7">
                  <p>
                  Nuestro objetivo es ser la elección preferida de los 
                  amantes de los postres, ofreciendo productos excepcionales, 
                  una plataforma intuitiva y un servicio al cliente incomparable. 
                  Fusionamos la tradición pastelera con la comodidad 
                  tecnológica para crear momentos memorables en la mente 
                  y el paladar de nuestros clientes.
                  </p>
                </div>
                <h3 className="text-xl lg:text-3xl mb-2 font-semibold mt-3">
                  Valores
                </h3>
                <div className="mt-3 text-base opacity-90 leading-7">
                  <ul>
                    <li>Excelencia culinaria</li>
                    <li>Innovación digital</li>
                    <li>Servicio al cliente excepcional</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                  <div className="p-8 bg-deepest shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                      1k
                    </span>
                    <h4 className="text-lg font-bold mb-1">Clientes Felices</h4>
                    <p className="mb-0 opacity-90 leading-7">
                      Nuestros clientes son nuestra prioridad, nos aseguramos de que estén
                      satisfecho con nuestros servicios
                    </p>
                  </div>
                  <div className="p-8 bg-deepest shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                      15
                    </span>
                    <h4 className="text-lg font-bold mb-1">
                      Postres Disponibles
                    </h4>
                    <p className="mb-0 opacity-90 leading-7">
                      Contamos con una amplia gama de productos, desde pasteles y galletas 
                      artesanales hasta deliciosos postres caseros. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="w-full  md:h-[600px] rounded shadow object-cover"
                  src="/images/about.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
