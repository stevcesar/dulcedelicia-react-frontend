import React from 'react';
import { Link } from 'react-router-dom';

function Promos() {
  return (
    <div className="bg-deepest rounded-xl pt-20 lg:py-2 grid lg:grid-cols-2 gap-6">
      <div className="flex lg:text-start text-center flex-col items-center lg:px-0 px-4 sm:px-12 lg:items-start gap-4 lg:pl-24 lg:py-20">
        <h1 className="text-2xl font-medium">
          Buscas los mejores postres{' '}
          <span className="text-main font-semibold">
            En las Pastelerías en Línea
          </span>
        </h1>
        <p className="text-sm text-gray-600 leading-7">  
         Si buscas endulzar tus momentos especiales o 
         simplemente deseas darte un capricho, ¡has llegado al lugar correcto
         Dulce Delicia!
        </p>
        <Link
          target="_blank"
          to="/registation"
          className="bg-main flex-colo hover:scale-105 transitions hover:bg-subMain lg:py-3 py-4 font-semibold w-44 rounded-md text-xs lg:text-sm text-white"
        >
          Comenzar
        </Link>
      </div>
      <div className="flex-colo">
        <img
          src="/images/promo.png"
          alt="promo"
          className="w-full sm:h-72 object-contain"
        />
      </div>
    </div>
  );
}

export default Promos;
