import React from "react";
import { ProductInfo } from "./ListProducts";
import Logo from "./Logo";

const SpecificProduct = (props) => {
  return (
    <div className="djkldjaskujeiorwasa" style={{ width: "100%" }}>
      <Title />
      <ListProduct width="20%" />
    </div>
  );
};

const Title = (props) => {
  return (
    <div className="dfjhkhjoiejawasas" style={{ width: "100%" }}>
      <div
        className="fdjkjskldjkawasasas"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          background: "#f2f0f5",
        }}
      >
        <Logo />
        <p
          className="fdjfksjdkljiawaw"
          style={{ fontSize: 32, fontWeight: 600 }}
        >
          Cửa thép vân gỗ
        </p>
      </div>
    </div>
  );
};

const ListProduct = (props) => {
  return (
    <div
      className="djsjaklsaqawawfdsad"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#fff",
      }}
    >
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
      <ProductInfo width={props?.width} />
    </div>
  );
};

export default SpecificProduct;
