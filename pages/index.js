import Footer from "./components/Footer"
import Header from "./components/Header"
import ImageIntroduce from "./components/ImageIntroduce"
import IntroduceCompany from "./components/IntroduceCompany"
import Navigation from "./components/Navigation"
import Head from "next/head"
import ChatMessenger from "./components/ChatMessenger"
import ProcessWay from "./components/ProcessWay"
import ListProducts from "./components/ListProducts"
import SpecificProduct from "./components/SpecificProduct"

const Home = (props)=> {
  return (
    <div className="daklajksajse9wea" style={{width: "100%"}}>
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
      <ListProducts />
      <SpecificProduct />
      <ProcessWay />
      <IntroduceCompany />
      <Footer />
      <ChatMessenger />
    </div>
  )
}

export default Home
