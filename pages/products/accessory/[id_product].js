import axios from "axios"
import Wrapper from "../../components/ComponentDetailProduct/Wrapper"
import Navigation from "../../components/Navigation"
import { SERVER_URL } from "../../_app"
// import { useRouter } from "next/router"

const DetailAccessory= ({data})=> {
    return (
        <div className="djksajsaiowsjasasa" style={{width: "100%"}}>
            <Navigation />
            <Wrapper {...data} />
        </div>
    )
}

export default DetailAccessory

export async function getServerSideProps(context) {
    // console.log(context)
    const res = await axios({
        url: `${SERVER_URL}/api/v1/get/detail/accessory`,
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
  