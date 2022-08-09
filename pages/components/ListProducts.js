import React, { Fragment } from 'react'
import { useState } from 'react'
import BreakLine from './BreakLine'
import styles from "./ListProducts.module.sass"
import Logo from './Logo'
import MainList from './MainList'

const ListProducts = (props) => {
  return (
    <div className="djslkjaksljasreaaw" style={{width: "100%", }}>
        <div className="jlkdajkurioujipeaw" style={{width: "100%", display: "flex", justifyContent: 'center'}}>
            <LeftSide />
            <RightSide />
        </div>
    </div> 
  )
}

export const LeftSide= (props)=> {
    return (
        <Fragment>
            {/* <div className="dhjaishjioheioawjsa" style={{width: "100vw", padding: 12, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ComponentLeftSide titleLeftSideComponent2={"Cửa thép vân gỗ"} arrayList={["Cửa vân thép một cánh", "Cửa vân thép 2 cánh đều", "Cửa vân thép gỗ 2 cánh lệch", "Cửa thép vân gỗ 4 cánh đều", "Cửa thép vân gỗ 4 cánh lệch", "Cửa sổ thép vân gỗ"]} />
                <BreakLine />
                <ComponentLeftSide titleLeftSideComponent2={"Cửa thép luxury"} arrayList={["Cửa vân thép một Luxury", "Cửa vân thép Luxury thủy lục"]} />
                <BreakLine />
                <ComponentLeftSide titleLeftSideComponent2={"Phụ kiện cửa"} arrayList={["Phụ kiện cửa thép vân gỗ", "Phụ kiện cửa thép chống cháy"]} />
            </div> */}
        </Fragment>
    )
}

export const ComponentLeftSide= (props)=> {
    return (
        <div className="dajiuwaksjsaksal">
            <TitleLeftSide titleLeftSideComponent2={props?.titleLeftSideComponent2} />
            <ListLeftSide arrayList={props.arrayList} />
        </div>
    )
}

export const TitleLeftSide= (props)=> {
    return (
        <div className="jiasjipjiwawawaaw" style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", height: 60}}>
            <TitleLeftSideComponent1 />
            <TitleLeftSideComponent2 titleLeftSideComponent2={props?.titleLeftSideComponent2} />
            <TitleLeftSideComponent3 />
        </div>
    )
}

export const TitleLeftSideComponent1= (props)=> {
    return (
        <div className="dsjiuqiwuajiwsjmassa" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Logo />&nbsp;&nbsp;
        </div>
    )
}

export const TitleLeftSideComponent2= (props)=> {
    return (
        <div className="djksjeeuiqaewjaskas" style={{fontSize: 24, fontWeight: 600, textTransform: "uppercase"}}>
            {props?.titleLeftSideComponent2}
        </div>
    )
}

export const TitleLeftSideComponent3= (props)=> {
    return (
        <div className="sdajioajwsiowjaida" style={{}}></div>
    )
}

export const ListLeftSide= (props)=> {
    return (
        <div className="djsiuioawuiaowjsa" style={{width: "100%"}}>
            {
                props?.arrayList?.map((item, key)=> <li className={styles.djkalsjaiweuajwaw} key={key} style={{width: "100%", height: 60, listStyleType: "none", display: "flex", alignItems: 'center', paddingLeft: 10, cursor: "pointer"}}>
                    {item}
                </li>)
            }
        </div>
    )
}


export const RightSide= (props)=> {
    return (
        <div className="edjuaiwjasmsaewr4awa" style={{flex: "1 1 0", marginLeft: 16}}>
            <HightLightTitle hightLightTitle={"Sản phẩm nổi bật"} />
            <MainList />
        </div>
    )
}

export const HightLightTitle= (props)=> {
    return (
        <div className="djakswiaolasnklmsdkl" style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 10, height: 50, background: "#f2f0f5"}}>
            <Logo />
            <p className="jkljaklasasasasasa" style={{fontSize: 32, fontWeight: 600}}>{props.hightLightTitle}</p>
        </div>
    ) 
}


export const ProductInfo= (props)=> {
    return (
        <div className="djskejakwjapwjqkpa" style={{width: props?.width, padding: 12, display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <div className="jkdjhskdueiokajasa" style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", border: "1px solid #e7e7e7", borderRadius: 5}}>
                <ImageProductInfo />
                <TitleProductInfo />
                <ContactProductInfo />
            </div>
        </div>
    )
}

const ImageProductInfo= (props)=> {
    return (
        <div className="djshdjhskjawsioasa" style={{width: "100%", height: 350, padding: 10}}>
            <div className="fjkdjsioajwioawjkaw" style={{width: "100%", height: "100%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <img src="https://koffmann.vn//assets/thumbs/assets_uploads_images_sanpham_cua-thep-van-go-deluxe-kd-10_85087_233x352.jpg" alt="open" style={{width: "100%", maxHeight: "100%"}} />
            </div>
        </div>
    )
}

const TitleProductInfo= (props)=> {
    return (
        <div className="dfkdoalskjalakoskajs" style={{width: "100%", margin: "16px 0"}}>
            <p className="djfksjd9eaweawrarse" style={{textAlign: "center"}}>Cửa thép vân gỗ KGV-41.01.03A</p>
        </div>
    )
}

const ContactProductInfo= (props)=> {
    return (
        <div className="fjdiodujiosjaiowww" style={{width: "100%", margin: "20px 0"}}>
            <p className='sjiodjisjaslkasasa' style={{textAlign: "center", color: "#c5241e", fontSize: 20, fontWeight: 600}}>Liên hệ</p>
        </div>
    )
}

export default ListProducts
