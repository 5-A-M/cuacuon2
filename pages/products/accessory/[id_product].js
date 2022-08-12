import axios from "axios"
import Wrapper from "../../components/ComponentDetailProduct/Wrapper"
import Navigation from "../../components/Navigation"
import { SERVER_URL } from "../../_app"
import { useRouter } from "next/router"
import { Fragment } from "react"
import Head from "next/head"

const DetailAccessory= ({data})=> {
    const router= useRouter()
    return (
        <Fragment>
            <Head>
                <meta content="origin" name="referrer" />
                <meta name="description" content={data[0].name} />
                <meta name="keywords" content="phụ kiện, phụ kiện cửa, phụ kiện cửa đẹp, phụ kiện cửa cuốn" />
                <title>{data[0].name}</title>
            </Head>
            <div className="djksajsaiowsjasasa" style={{width: "100%"}}>
                {
                    !router.query.is_admin === true && !router.query.is_edit=== true &&
                    <Navigation />
                }
                <Wrapper is_admin={router.query.is_admin} is_edit={router.query.is_edit} is_accessory={true} {...data} />
            </div>
        </Fragment>
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
  