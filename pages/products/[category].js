import React, { Fragment } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { SERVER_URL } from "../_app";
import { ProductAccessory, ProductInfo } from "../components/ListProducts";
import Navigation from "../components/Navigation";
import Head from "next/head";

const CategoryProduct = ({ data }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Fragment>
      <Head>
        <title>
          {
            router.query.category=== "cua-thep-van-go" ? "Cửa thép vân gỗ" : ""
          }
          {
            router.query.category=== "cua-thep-luxury" ? "Cửa thép luxury" : ""
          }
          {
            router.query.category=== "phu-kien-cua" ? "Phụ kiện cửa" : ""
          }
        </title>
        <meta content="origin" name="referrer" />
        <meta name="description" content={"Cửa cuốn vân gỗ chất lượng số 1 Việt Nam"} />
        <meta name="keywords" content="phụ kiện, phụ kiện cửa, phụ kiện cửa đẹp, phụ kiện cửa cuốn, cửa, cửa cuốn, cửa cuốn đẹp" />
      </Head>
      <div className="sdajklashkjahsdakjs">
        <Navigation />
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
          {router.query.category === "phu-kien-cua" && (
            <>
              {data?.map((item, key) => (
                <ProductAccessory key={key} width={"20%"} {...item} />
              ))}
              {data?.length <= 0 && <div>Không có sản phẩm nào</div>}
            </>
          )}
          {router.query.category !== "phu-kien-cua" && (
            <>
              {data?.map((item, key) => (
                <ProductInfo key={key} width={"20%"} {...item} />
              ))}
              {data?.length <= 0 && <div>Không có sản phẩm nào</div>}
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryProduct;

export async function getServerSideProps(context) {
  // console.log(context.query)
  const res = await axios.get(`${SERVER_URL}/api/v1/get/product/category`, {
    responseType: "json",
    params: { category: context.query.category },
  });
  const data = await res.data;
  return {
    props: { data },
  };
}
