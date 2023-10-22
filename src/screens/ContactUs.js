import React from 'react';
import Head from '../components/Head';
import Layout from '../layout/Layout';
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';

function ContactUs() {
  const contactData = [
    {
      id: 1,
      title: 'Nuestro Email',
      info: 'Contacta con nosotros a través de este correo y con gusto te ayudaremos',
      icon: FiMail,
      contact: 'info@dulcedelicia.com',
    },
    {
      id: 2,
      title: 'Llamanos',
      info: 'No dudes en llamarnos si tienes alguna duda, estamos a la orden',
      icon: FiPhoneCall,
      contact: '+502 2335 6585',
    },
    {
      id: 3,
      title: 'Ubicación',
      info: '21 Calle 45-10 Zona 1 , Guatemala, Ciudad de Guatemala',
      icon: FiMapPin,
      contact: '',
    },
  ];
  return (
    <Layout header={true}>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Contactanos" />
        <div className="grid md:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
          {contactData.map((data) => (
            <div key={data.id} className="border p-10 rounded-lg text-center">
              <span className="flex justify-center text-4xl text-subMain mb-4">
                <data.icon />
              </span>
              <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
              <p className="mb-0 text-base opacity-90 leading-7">
                <a href={`mailto:${data.contact}`} className="text-main">
                  {data.contact}
                </a>{' '}
                {data.info}
              </p>
            </div>
          ))}
        </div>
        {/* mapa*/}
        <div className="my-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30882.871631738253!2d-90.5281124872053!3d14.635554094691573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a214c43783af%3A0x371e92e045aa2638!2sZona%201%2C%20Cdad.%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1697782974430!5m2!1ses!2sgt"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
