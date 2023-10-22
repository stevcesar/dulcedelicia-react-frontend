import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="px-6 py-10 lg:py-20 bg-deepGray h-screen flex flex-wrap content-center">
      <div className="block justify-items-stretch mx-auto items-center text-center">
        <img
          className="w-full h-96 object-contain mb-6"
          src="/images/404.svg"
          alt="logo"
        />
        <h2 className="font-bold font-2xl lg:text-4xl leading-6">
          ¡Página no encontrada!
        </h2>
        <p className="block my-6 text-center text-base  text-gray-600">
        ¡Lo siento! ¡Esta página no se encuentra! Por favor, inténtelo de nuevo más tarde.
        </p>
        <button className="bg-main py-3 px-6 text-white rounded font-medium">
          <Link to="/">Regrear a Inicio</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
