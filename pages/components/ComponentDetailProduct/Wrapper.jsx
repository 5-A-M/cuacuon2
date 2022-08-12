import React, { useEffect } from 'react'
import { useState } from 'react'
import BreakLine from '../BreakLine'
import DetailRight from './DetailRight'
import ImageLeft from './ImageLeft'
import Title from './Title'

const Wrapper = (props) => {
  const [info, setInfo]= useState(()=> {})
  useEffect(()=> {
    setInfo(prev=> ({...prev, ...props[0]}))
  }, [props])
  return (
    <div className="kjdldjadklajwa" style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
      <div className="dsjklajklsakslasas" style={{width: "100%", maxWidth: 1280, display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column"}}>
        { 
            props.is_admin !== "true" && props.is_edit!== "true" &&
            <Title is_admin={props.is_admin} {...props[0]} />
        }
        {
          props.is_admin === "true" && props.is_edit=== "true" &&
          <div style={{margin: "16px 0", fontSize: 24, fontWeight: 600}}>Sửa sản phẩm</div>
        }
        <BreakLine />
        <div className="DSaJklsajslksasa" style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <ImageLeft setInfo={setInfo} {...info} />
          <DetailRight setInfo={setInfo} is_edit={props.is_edit} is_admin={props.is_admin} is_accessory={props.is_accessory} {...info} />
        </div>
      </div>
    </div>
  )
}

export default Wrapper

