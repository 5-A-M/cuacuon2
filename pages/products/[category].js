import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { SERVER_URL } from "../_app";
import { ProductAccessory, ProductInfo } from "../components/ListProducts";
import Navigation from "../components/Navigation";

const CategoryProduct = ({ data }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
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
        {
            router.query.category=== "phu-kien-cua" &&
            <>
                {data?.map((item, key) => (
                <ProductAccessory key={key} width={"20%"} {...item} />
                ))}
                {
                    data?.length <=0 && <div>Không có sản phẩm nào</div>
                }
            </>
        }
        {
            router.query.category!== "phu-kien-cua" &&
            <>
                {data?.map((item, key) => (
                <ProductInfo key={key} width={"20%"} {...item} />
                ))}
                {
                    data?.length <=0 && <div>Không có sản phẩm nào</div>
                }
            </>
        }
      </div>
    </div>
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
