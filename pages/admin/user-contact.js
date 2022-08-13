import axios from 'axios'
import Head from 'next/head'
import React, { Fragment } from 'react'
import Navigation from '../components/ComponentForAdmin/Navigation'
import Title from '../components/ComponentForAdmin/Title'
import { SERVER_URL } from '../_app'
import moment from "moment"

const UserContact = ({data}) => {
  return (
    <Fragment>
      <Head>
        <title>Quản lí sản phẩm</title>
      </Head>
      <Title />
      <Navigation />
      {
        data?.map((item, key)=> <div style={{width: "100%", padding: 10, borderRadius: 10, border: "1px solid #e7e7e7", margin: "16px"}} key={key}>
            <div>Họ và tên khách hàng: <strong>{item.name}</strong></div>
            <div>Địa chỉ khách hàng: <strong>{item.address}</strong></div>
            <div>Số điện thoại khách hàng: <strong>{item.phoneNumber}</strong></div>
            <div>Mô tả: <strong>{item.description}</strong></div>
            <div>Đã gửi lúc: <strong>{moment(item.time).format("DD/MM/YYYY hh:mm:ss")}</strong></div>
        </div>)
      }
    </Fragment> 
  )
}

export default UserContact

export async function getServerSideProps(context) {
    const res= await axios.get(`${SERVER_URL}/api/v1/advise/contact`, {responseType: "json"})
    const result= await res.data
    return {
        props: {
            data: result
        }
    }
}