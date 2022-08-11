import axios from "axios"
import Wrapper from "../../components/ComponentDetailProduct/Wrapper"
import Navigation from "../../components/Navigation"
// import { useRouter } from "next/router"

const DetailProduct= ({data})=> {
    return (
        <div className="djksajsaiowsjasasa" style={{width: "100%"}}>
            <Navigation />
            <Wrapper {...data} />
        </div>
    )
}

export default DetailProduct

export async function getServerSideProps(context) {
    // console.log(context)
    const res = await axios({
        url: `https://cuacuonserver.herokuapp.com/api/v1/get/detail/door`,
        method: "GET",
        responseType: "json",
        params: {
           _id: context.query.id_product
        }
    })
    const data = await res.data;
    return {
      props: { data },
    };
  }
  