import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { SERVER_URL } from '../_app'

const CategoryProduct = ({data}) => {
    const router= useRouter()
    const { category }= router.query
    return (
        <div className="sdajklashkjahsdakjs">
            {category}
        </div>
    )
}

export default CategoryProduct

export async function getServerSideProps(context) {
    // console.log(context.query)
    const res = await axios.get(`${SERVER_URL}/api/v1/get/product/category`, {responseType: "json", params: {category: context.query.category}});
    const data = await res.data;
    return {
      props: { data },
    };
  }
  