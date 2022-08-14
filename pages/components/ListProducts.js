import React, { Fragment } from "react";
// import { useState } from 'react'
// import BreakLine from './BreakLine'
import styles from "./ListProducts.module.sass";
import Logo from "./Logo";
import MainList from "./MainList";
import { useRouter } from "next/router";
import moment from "moment";

const ListProducts = (props) => {
  return (
    <div className="djslkjaksljasreaaw" style={{ width: "100%" }}>
      <div
        className="jlkdajkurioujipeaw"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <LeftSide />
        <RightSide {...props} />
      </div>
    </div>
  );
};

export const LeftSide = (props) => {
  return (
    <Fragment>
      {/* <div className="dhjaishjioheioawjsa" style={{width: "100vw", padding: 12, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ComponentLeftSide titleLeftSideComponent2={"Cửa thép vân gỗ"} arrayList={["Cửa vân thép một cánh", "Cửa vân thép 2 cánh đều", "Cửa vân thép gỗ 2 cánh lệch", "Cửa thép vân gỗ 4 cánh đều", "Cửa thép vân gỗ 4 cánh lệch", "Cửa sổ thép vân gỗ"]} />
                <BreakLine />
                <ComponentLeftSide titleLeftSideComponent2={"Cửa thép luxury"} arrayList={["Cửa vân thép một Luxury", "Cửa vân thép Luxury thủy lục"]} />
                <BreakLine />
                <ComponentLeftSide titleLeftSideComponent2={"Phụ kiện cửa"} arrayList={["Phụ kiện cửa thép vân gỗ", "Phụ kiện cửa thép chống cháy"]} />
            </div> */}
    </Fragment>
  );
};

export const ComponentLeftSide = (props) => {
  return (
    <div className="dajiuwaksjsaksal">
      <TitleLeftSide titleLeftSideComponent2={props?.titleLeftSideComponent2} />
      <ListLeftSide arrayList={props.arrayList} />
    </div>
  );
};

export const TitleLeftSide = (props) => {
  return (
    <div
      className="jiasjipjiwawawaaw"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
      }}
    >
      <TitleLeftSideComponent1 />
      <TitleLeftSideComponent2
        titleLeftSideComponent2={props?.titleLeftSideComponent2}
      />
      <TitleLeftSideComponent3 />
    </div>
  );
};

export const TitleLeftSideComponent1 = (props) => {
  return (
    <div
      className="dsjiuqiwuajiwsjmassa"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
      &nbsp;&nbsp;
    </div>
  );
};

export const TitleLeftSideComponent2 = (props) => {
  return (
    <div
      className="djksjeeuiqaewjaskas"
      style={{ fontSize: 24, fontWeight: 600, textTransform: "uppercase" }}
    >
      {props?.titleLeftSideComponent2}
    </div>
  );
};

export const TitleLeftSideComponent3 = (props) => {
  return <div className="sdajioajwsiowjaida" style={{}}></div>;
};

export const ListLeftSide = (props) => {
  return (
    <div className="djsiuioawuiaowjsa" style={{ width: "100%" }}>
      {props?.arrayList?.map((item, key) => (
        <li
          className={styles.djkalsjaiweuajwaw}
          key={key}
          style={{
            width: "100%",
            height: 60,
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
            cursor: "pointer",
          }}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export const RightSide = (props) => {
  return (
    <div
      className="edjuaiwjasmsaewr4awa"
      style={{ flex: "1 1 0", marginLeft: 16 }}
    >
      <HightLightTitle hightLightTitle={"Sản phẩm nổi bật"} />
      <MainList {...props} />
    </div>
  );
};

export const HightLightTitle = (props) => {
  return (
    <div
      className="djakswiaolasnklmsdkl"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: 50,
        background: "#f2f0f5",
      }}
    >
      <Logo />
      <p
        className="jkljaklasasasasasa"
        style={{ fontSize: 32, fontWeight: 600 }}
      >
        {props.hightLightTitle}
      </p>
    </div>
  );
};

export const ProductInfo = (props) => {
  const router = useRouter();
  if (props.is_admin === true && props.is_edit === true) {
    return (
      <div
        onClick={() =>
          router.push({
            pathname: `/products/door/${props._id}`,
            query: {
              is_admin: props.is_admin || false,
              is_edit: props.is_edit || false,
            },
          })
        }
        className="djskejakwjapwjqkpa"
        style={{
          width: "20%",
          padding: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="jkdjhskdueiokajasa"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid #e7e7e7",
            borderRadius: 5,
            position: "relative",
          }}
        >
          <ImageProductInfo {...props} />
          <TitleProductInfo {...props} />
          <ContactProductInfo {...props} />
          {props.is_admin === true && <NewProduct {...props} />}
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => window.location.href= `/products/door/${props._id}`}
        className="djskejakwjapwjqkpa"
        style={{
          width: "20%",
          padding: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="jkdjhskdueiokajasa"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid #e7e7e7",
            borderRadius: 5,
            position: "relative",
          }}
        >
          <ImageProductInfo {...props} />
          <TitleProductInfo {...props} />
          <ContactProductInfo {...props} />
          {props.is_admin === true && <NewProduct {...props} />}
        </div>
      </div>
    );
  }
};

export const ProductAccessory = (props) => {
  const router = useRouter();
  if (props.is_admin === true && props.is_edit === true) {
    return (
      <div
        onClick={() =>
          router.push({
            pathname: `/products/accessory/${props._id}`,
            query: {
              is_admin: props.is_admin || false,
              is_edit: props.is_edit || false,
            },
          })
        }
        className="djskejakwjapwjqkpa"
        style={{
          width: "20%",
          padding: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="jkdjhskdueiokajasa"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid #e7e7e7",
            borderRadius: 5,
            position: "relative",
          }}
        >
          <ImageProductInfo {...props} />
          <TitleProductInfo {...props} />
          <ContactProductInfo {...props} />
          {props.is_admin === true && <NewProduct {...props} />}
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() =>
          router.push({ pathname: `/products/accessory/${props._id}` })
        }
        className="djskejakwjapwjqkpa"
        style={{
          width: "20%",
          padding: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="jkdjhskdueiokajasa"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid #e7e7e7",
            borderRadius: 5,
            position: "relative",
          }}
        >
          <ImageProductInfo {...props} />
          <TitleProductInfo {...props} />
          <ContactProductInfo {...props} />
          {props.is_admin === true && <NewProduct {...props} />}
        </div>
      </div>
    );
  }
};

const ImageProductInfo = (props) => {
  return (
    <div
      className="djshdjhskjawsioasa"
      style={{ width: "100%", height: 350, padding: 10 }}
    >
      <div
        className="fjkdjsioajwioawjkaw"
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {/* eslint-disable-next-line */}
        <img
          src={props?.photo}
          alt="open"
          style={{ width: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
};

const TitleProductInfo = (props) => {
  return (
    <div
      className="dfkdoalskjalakoskajs"
      style={{ width: "100%", margin: "16px 0" }}
    >
      <p className="djfksjd9eaweawrarse" style={{ textAlign: "center" }}>
        {props.name} {props.code}
      </p>
    </div>
  );
};

const ContactProductInfo = (props) => {
  return (
    <div
      className="fjdiodujiosjaiowww"
      style={{ width: "100%", margin: "20px 0" }}
    >
      <p
        className="sjiodjisjaslkasasa"
        style={{
          textAlign: "center",
          color: "#c5241e",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        {props.price}
      </p>
    </div>
  );
};

export default ListProducts;

const NewProduct = (props) => {
  if (
    props.time_created &&
    moment.duration(moment().diff(moment(props.time_created))).asMinutes() <= 10
  ) {
    return (
      <div
        className="dskljsjaklsjassaas"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          padding: 5,
          borderRadius: 6,
          background: "#f00",
          color: "#fff",
        }}
      >
        Sản phẩm mới
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
};
