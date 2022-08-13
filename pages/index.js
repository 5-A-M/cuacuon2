import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageIntroduce from "./components/ImageIntroduce";
import IntroduceCompany from "./components/IntroduceCompany";
import Navigation from "./components/Navigation";
import Head from "next/head";
import ProcessWay from "./components/ProcessWay";
import ListProducts from "./components/ListProducts";
import SpecificProduct from "./components/SpecificProduct";
import axios from "axios";
import { SERVER_URL } from "./_app";
import WrapperContact from "./components/Contact/WrapperContact";
import { lazy, Suspense } from "react";
const AlertDialogSlide2= lazy(()=> import("./components/ComponentDetailProduct/Popup2"))

const Home = ({ data, data2 }) => {
  return (
    <div className="daklajksajse9wea" style={{ width: "100%" }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Trang chủ" key={"Trang chủ"} />
        <meta name="robots" content="all" />
        <meta name="description" content="Trang chủ" />
        <title>Trang chủ</title>
      </Head>
      <Header />
      <Navigation />
      <ImageIntroduce />
      <ListProducts data={data} data2={data2} />
      <SpecificProduct data={data} />
      <ProcessWay />
      <IntroduceCompany />
      <Footer />
      <WrapperContact />
      <div>
        <Suspense fallback={<div></div>}>
          <AlertDialogSlide2 />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps(context) {
  // console.log(context)
  const res = await axios.get(`${SERVER_URL}/api/v1/get/cuacuon`, {responseType: "json"});
  const data = await res.data;
  const res2= await axios.get(`${SERVER_URL}/api/v1/get/cuacuon/luxury`, {responseType: "json"})
  const data2= await res2.data
  return {
    props: { data, data2},
  };
}
