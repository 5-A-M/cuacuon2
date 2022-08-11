import axios from "axios";
import { Fragment, useEffect } from "react";
import BreakLine from "../components/BreakLine";
import Navigation from "../components/ComponentForAdmin/Navigation";
import Title from "../components/ComponentForAdmin/Title";
import { ProductAccessory, ProductInfo } from "../components/ListProducts";
import { SERVER_URL } from "../_app";
import Head from "next/head";
import { useRouter } from "next/router";

const ManageProducts = (props) => {
  const router = useRouter();
  useEffect(() => {
    console.log(sessionStorage.getItem("admin"));
    if (sessionStorage.getItem("admin") !== "true") {
      router.push("/admin/login");
    }
  }, [router]);
  return (
    <Fragment>
      <Head>
        <title>Quản lí sản phẩm</title>
      </Head>
      <Title />
      <Navigation />
      <div className="fjijaksojirasas" style={{ padding: 10 }}>
        <div style={{ width: "100%" }}>Danh sách cửa cuốn</div>
        <div
          className="djsjaklsaqawawfdsad"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            background: "#fff",
          }}
        >
          {props?.data1?.map((item, key) => (
            <ProductInfo
              is_admin={true}
              is_edit={true}
              key={key}
              width={"20%"}
              {...item}
            />
          ))}
          {props?.data1?.length <= 0 && "Không có sản phẩm"}
        </div>
        <BreakLine />
        <div style={{ width: "100%" }}>Danh sách cửa luxury</div>
        <div
          className="djsjaklsaqawawfdsad"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            background: "#fff",
          }}
        >
          {props?.data2?.map((item, key) => (
            <ProductInfo
              is_admin={true}
              id_edit={true}
              key={key}
              width={"20%"}
              {...item}
            />
          ))}
          {props?.data2?.length <= 0 && "Không có sản phẩm"}
        </div>
        <BreakLine />
        <div style={{ width: "100%" }}>Danh sách phụ kiện cửa</div>
        <div
          className="djsjaklsaqawawfdsad"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            background: "#fff",
          }}
        >
          {props?.data3?.map((item, key) => (
            <ProductAccessory
              is_admin={true}
              key={key}
              width={"20%"}
              {...item}
            />
          ))}
          {props?.data3?.length <= 0 && "Không có sản phẩm"}
        </div>
      </div>
    </Fragment>
  );
};

export default ManageProducts;

export async function getServerSideProps(context) {
  const res1 = axios.get(`${SERVER_URL}/api/v1/get/product/category`, {
    responseType: "json",
    params: { category: "cua-thep-van-go" },
  });
  const res2 = axios.get(`${SERVER_URL}/api/v1/get/product/category`, {
    responseType: "json",
    params: { category: "cua-thep-luxury" },
  });
  const res3 = axios.get(`${SERVER_URL}/api/v1/get/product/category`, {
    responseType: "json",
    params: { category: "phu-kien-cua" },
  });
  const res = await Promise.all([res1, res2, res3]);
  const result1 = await res[0].data;
  const result2 = await res[1].data;
  const result3 = await res[2].data;
  return {
    props: {
      data1: result1,
      data2: result2,
      data3: result3,
    },
  };
}
