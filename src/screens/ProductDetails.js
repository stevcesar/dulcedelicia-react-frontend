import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { BsShareFill } from 'react-icons/bs';
import Titles from '../components/Titles';
import { TbListDetails } from 'react-icons/tb';
import Products from '../components/Products';
import ShareMovieModal from '../components/Modals/ShareModal';
import { toast } from 'react-hot-toast';
import {
  //ColorRadio,
  ProductImages,
  QuantityRadio,
  //SizeRadio,
} from '../components/DetailRadio';
import { Empty } from '../components/Notifications/Error';
import { useDispatch, useSelector } from 'react-redux';
import { addWishListAction, getCardAction } from '../Redux/Actions/CardAction';
import { CardLoader, Loader } from '../components/Notifications/Loader';

function ProductDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  //const [size, setSize] = useState({});
  //const [colors, setColors] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(0);
  const {
    getCard: { card, loading, error, related },
    wishlists: { wishlist },
  } = useSelector((state) => state);

  // obtener tarjeta de producto por id
  useEffect(() => {
    if (id) {
      dispatch(getCardAction(id));
    }
  }, [dispatch, id]);

  // obtener stock
  useEffect(() => {
    if (card?.stock) {
      setStock(card?.stock);
    }
  }, [card]);

  // manejo de errores
  useEffect(() => {
    if (error) {
      dispatch({ type: 'GET_PRODUCT_RESET' });
    }
  }, [error, dispatch]);

  // agregar a la lista de compras
  const addWishlist = (data) => {
    // validar si el producto ya existe en la lista de compras
    const exist = wishlist?.find((x) => x?._id === data?._id);
    if (exist) {
      toast.error('Product already in cart');
      return;
    } else {
      dispatch(
        addWishListAction({
          ...data,
          // size: size?.value,
          // color: `${colors?.title}, code: ${colors?.color}`,
          quantity: quantity,
        })
      );
      toast.success('Added to cart');
    }
  };

  return (
    <Layout header={true}>
      {modalOpen && (
        <ShareMovieModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          card={card}
        />
      )}

      {loading ? (
        <div className="min-h-screen flex-colo container mx-auto">
          <Loader />
        </div>
      ) : error ? (
        <div className="min-h-screen flex-colo container mx-auto">
          <Empty text={'Card not found'} />
        </div>
      ) : card?.createdAt ? (
        <div className="min-h-screen container mx-auto px-2 sm:px-4 xl:px-32 my-8 sm:my-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 items-start">
            <div className="p-2 lg:sticky top-28">
              <ProductImages images={card?.images} />
            </div>
            <div className="w-full flex gap-4 flex-col px-5 md:px-8 text-left">
              <div className="block">
                <h1 className=" text-lg md:text-lg lg:text-xl">
                  {card?.title}
                </h1>
              </div>
              <p className="text-sm leading-6 text-gray-500 md:leading-6">
                {card?.description}
              </p>
              <h1 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold">
                Q{card?.price}
              </h1>

              {/* details */}
              <div className="space-y-8">
                {/* <ColorRadio selected={colors} setSelected={setColors} /> */}
                {/* <SizeRadio selected={size} setSelected={setSize} /> */}
                {card?.stock > 0 && (
                  <div>
                    <QuantityRadio
                      quantity={quantity}
                      setQuantity={setQuantity}
                      stock={stock}
                    />
                    {/* nota */}
                    <p className="text-xs text-gray-500 mt-2 italic">
                      Solo {card?.stock} quedan en stock, se están preparando más.
                    </p>
                  </div>
                )}
              </div>

              {/* agregar al carrito */}
              <div className="grid mt-4 2xl:grid-cols-7 sm:grid-cols-2 lg:grid-cols-1 gap-3 items-center">
                {
                  // comprobar si el producto está en stock
                  card?.stock > 0 ? (
                    <button
                      disabled={!quantity}
                      onClick={() => addWishlist(card)}
                      className="2xl:col-span-6  disabled:bg-orange-300 transitions hover:bg-subMain bg-main py-4 px-2 rounded-md flex-colo font-semibold text-white"
                    >
                      Agregar al Carrito
                    </button>
                  ) : (
                    <div className="2xl:col-span-6 border bg-deepest py-4 px-2 rounded-md flex-colo font-semibold text-flash">
                      Agotado
                    </div>
                  )
                }

                <button
                  onClick={() => setModalOpen(true)}
                  className=" border-[.5px] border-main bg-deepest 2xl:py-4 py-5 px-2 rounded-md flex-rows gap-4 font-semibold text-main"
                >
                  <BsShareFill />
                </button>
              </div>
              {/* tags */}
              <div className="flex flex-row gap-3 mt-4 flex-wrap">
                {card?.tags?.map((tag) => (
                  <div
                    key={tag}
                    className="bg-deepest border border-deepest font-medium text-main rounded-full py-2 px-4 text-xs"
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* tarjetas de productos relacionados */}
          <div className="lg:mt-24 mt-12">
            <Titles title="También podría gustarte" Icon={TbListDetails} />

            <div className="grid mt-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {loading || related?.length === 0
                ? // cantidad de tarjetas de productos
                  Array.from(Array(3).keys()).map((s, i) => (
                    <CardLoader key={i} />
                  ))
                : related.map((p) => (
                    <Products bg={false} key={p?._id} product={p} />
                  ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex-colo container mx-auto px-2 sm:px-4 xl:px-32 my-8 sm:my-12">
          <Empty text={'Productos no Encontrados'} />
        </div>
      )}
    </Layout>
  );
}

export default ProductDetails;
