import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer() {
  const { userInfo } = useSelector((state) => state.userLogin);
  const Links = [
    {
      title: 'Empresa',
      links: [
        {
          link: '/about-us',
          name: 'Sobre Nosotros',
        },
        {
          link: '/faq',
          name: 'FAQ',
        },
        {
          link: '/policy',
          name: 'Política',
        },
        {
          link: '/terms-condition',
          name: 'Condiciones',
        },
      ],
    },
    {
      title: 'Top Categorías',
      links: [
        {
          link: '#',
          name: 'Pasteles',
        },
        {
          link: '#',
          name: 'Galletas',
        },
        {
          link: '#',
          name: 'Cupcakes',
        },
        {
          link: '#',
          name: 'Especiales',
        },
      ],
    },
    {
      title: 'Mi Cuenta',
      links: [
        {
          link: userInfo ? '/dashboard' : '/registation',
          name: 'Dashboard',
        },
        {
          link: userInfo ? '/orders' : '/registation',
          name: 'Mis Ordenes',
        },
        {
          link: userInfo ? '/profile' : '/registation',
          name: 'Actualizar mi Foto',
        },
        {
          link: userInfo ? '/password' : '/registation',
          name: 'Cambiar Contraseña',
        },
      ],
    },
  ];
  return (
    <div className="bg-gray-50 py-4 border-t-2">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((l, i) => (
            <div
              key={i}
              className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {l.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {l.links.map((t, index) => (
                  <li className="flex items-baseline" key={index}>
                    <Link
                      to={t.link}
                      className="text-gray-600 inline-block w-full hover:text-main"
                    >
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                className="w-2/4 object-contain h-12"
                src="/images/logo.png"
                alt="logo"
              />
            </Link>
            <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
              <span>
                21 Calle 45-10 Zona 1, <br /> Guatemala, Ciudad de Guatemala
              </span>
              <br />
              <span>Tel: +502 2335 6585</span>
              <br />
              <span>Email: info@dulcedelicia.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
