import React from "react";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import Navigation from "../components/Navigation";
import SpecificProduct from "../components/SpecificProduct";
import Head from "next/head";

const Products = ({ data }) => {
  return (
    <div className="fdjhkejqklejasasa">
      <Head>
        <title>Sản phẩm</title>
      </Head>
      {console.log(data)}
      {console.log(111)}
      <Header />
      <Navigation />
      <Wrapper />
      <ListProducts />
      <SpecificProduct />
    </div>
  );
};

export const Title = (props) => {
  return (
    <div className="fjkdjsklsmasas" style={{ fontSize: 32 }}>
      {props.title}
    </div>
  );
};

export default Products;

const Wrapper = (props) => {
  return (
    <div
      className="fjkldjaksaas"
      style={{
        width: "100%",
        background: "#fff",
        position: "relative",
        zIndex: 16,
      }}
    >
      {/* <Title title={"Sản phẩm nổi bật"} /> */}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4000/api/v1/get/cuacuon`);
  const data = await res.json();
  return {
    props: { data },
  };
}
