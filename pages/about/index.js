import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Head from "next/head"

const About = () => {
  return (
    <div className="daklajksajse9wea" style={{width: "100%"}}>
      <Head>
        <title>Giới thiệu</title>
        <meta content="origin" name="referrer" />
        <meta name="description" content={"Giới thiệu về công ty"} />
        <meta name="keywords" content="giới thiệu, about" />
      </Head>
      <Header />
      <Navigation />
      <div>Hello World</div>
    </div>
  )
}

export default About