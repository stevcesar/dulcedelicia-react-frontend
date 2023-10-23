import React, { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';

// Importar componentes de Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';

const title = 'text-sm font-medium';

export function QuantityRadio({ quantity, setQuantity, stock }) {
  const classes =
    'border border-gray-300 rounded w-10 h-10 flex-colo disabled:bg-dryGray disabled:cursor-not-allowed';
  return (
    <div className="space-y-2">
      {/* detalles */}
      <h2 className={title}>Cantidad</h2>
      {/* seleccionado */}
      <div className="flex-btn gap-4 border rounded-md w-full p-2 ">
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
          className={classes}
        >
          -
        </button>
        <h2 className="text-lg font-semibold">{quantity}</h2>
        <button
          disabled={quantity === stock}
          onClick={() => setQuantity(quantity + 1)}
          className={classes}
        >
          +
        </button>
      </div>
    </div>
  );
}

export function ProductImages({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((image) => (
          <SwiperSlide>
            <img
              src={image}
              className="w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-2xl object-cover"
              alt="product"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mt-4"
      >
        {images?.map((image) => (
          <SwiperSlide>
            <img
              src={image}
              className="w-full h-24 md:h-32 rounded-lg border cursor-pointer object-cover"
              alt="product"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
