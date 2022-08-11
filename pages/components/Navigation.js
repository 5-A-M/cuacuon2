import React, { useMemo, useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import "./Navigation.module.sass"
import HoverListProducts from './HoverListProducts'
import { CSSTransition } from 'react-transition-group'
import { MobileView, isMobile } from "react-device-detect"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Device from './Dynamic'

const Navigation = (props) => {
  const router= useRouter()
  const array_navigation= useMemo(()=> [{link: "/", text: "Trang chủ"}, {link: "/about", text: "Giới thiệu"}, {link: "/price", text: "Báo giá"}, {link: "/products/cua-thep-van-go", text: "Cửa thép vân gỗ"}, {link: "/products/cua-thep-luxury", text: "Cửa thép luxury"}, {link: "/products/phu-kien-cua", text: "Phụ kiện cửa"}], [])
  const [open, setOpen]= useState(()=> true)
  return (
    <div className="navigation" style={{width: "100%", height: 60, display: 'flex', justifyContent: 'center', alignItems: "center", position: 'sticky', zIndex: 20, background: "#000", top: 0, flexDirection: "column"}}>
        <Device style={{width: "100%"}}>
            {
                isMobile=== true &&
                <div className="dsjklajskjrawipesas" style={{width: "100%", padding: "0 10px"}}>
                    <MobileView style={{width: "100%"}}>
                        <div className="skalsjaksjkalsa" style={{width: "100%"}}>
                            <div className="dsajkldjakslajskla" style={{width: "100%", height: 60, display: "flex", alignItems: "center"}}>
                                <div onClick={()=> setOpen(prev=> !prev)} className="djskldjaklsjasaas" style={{width: 56, height: 56, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    {
                                        open=== false ? <AiOutlineMenu color="#fff" size={28} /> : <AiOutlineClose color="#fff" size={28} />
                                    }
                                </div>
                            </div>
                        </div>
                    </MobileView>
                </div>
            }
        </Device>
        {
            open=== true && <nav className="dajisoauiouwjoiqw" style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center",display: "flex", gap: 30}}>
            {
                array_navigation.map((item, key)=> 
                <Link key={key} href={item.link}>
                    <a className="akjslakslfkosdkas">
                        <ContentLink index={parseInt(key) + 1} router={router} {...item} />
                    </a>
                </Link>)
            }
        </nav>
        }
    </div>
  )
}

export default Navigation

const ContentLink= (props)=> {
    const [open, setOpen]= useState(()=> false)
    return (
        <p className="djiljaiosjasas" onMouseEnter={()=> (parseInt(props.index) === 3 || parseInt(props.index) === 5 || parseInt(props.index) === 6 || parseInt(props.index) === 7) && setOpen(()=> true)} onMouseLeave={()=> setOpen(()=> false)} style={{color: props.router.pathname=== props.link ? "#2e89ff" : "#fff", fontSize: 18, height: "60px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}><span style={{border: "1px solid #fff", padding: "4px 12px", borderRadius: 80, position: "relative"}}>{props.text}</span>
            {
                <CSSTransition
                in={open}
                timeout={300}
                classNames="alert"
                unmountOnExit
              >
                <HoverListProducts index={props.index} />
              </CSSTransition>
                
            }
        </p>
    )
}