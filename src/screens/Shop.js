import React from 'react';
import Layout from '../layout/Layout';
import Promos from './../components/Promos';
import SidebarFilter from '../components/SidebarFilter';
import { useSelector } from 'react-redux';

function Shop() {
  //  obtener consulta /store? category=categoría de la URL

  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const {
    userLogin: { userInfo }
  } = useSelector((state)=> state)
  //console.log(category);

  return (
    <Layout header={true}>
      {/* filtros */}
      <div className="min-h-screen container mx-auto px-4 my-6">
        <div className="my-12 lg:block hidden">
          {userInfo? null : <Promos />}
        </div>
        <SidebarFilter category={category} />
      </div>
    </Layout>
  );
}

export default Shop;
