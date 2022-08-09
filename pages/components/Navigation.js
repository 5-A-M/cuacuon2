import React, { useMemo, useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import "./Navigation.module.sass"
import HoverListProducts from './HoverListProducts'
import { CSSTransition } from 'react-transition-group'

const Navigation = (props) => {
  const router= useRouter()
  const array_navigation= useMemo(()=> [{link: "/", text: "Trang chủ"}, {link: "/about", text: "Giới thiệu"}, {link: "/products", text: "Sản phẩm"}, {link: "/price", text: "Báo giá"}, {link: "/products/cua-thep-van-go", text: "Cửa thép vân gỗ"}, {link: "/products/cua-thep-luxury", text: "Cửa thép luxury"}, {link: "/products/phu-kien-cua", text: "Phụ kiện cửa"}])
  return (
    <div className="navigation" style={{width: "100%", height: 60, display: 'flex', justifyContent: 'center', alignItems: "center", position: 'sticky', zIndex: 20, background: "#000", top: 0}}>
        <nav className="dajisoauiouwjoiqw" style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center",display: "flex", gap: 30}}>
            {
                array_navigation.map((item, key)=> 
                    <Link key={key} href={item.link}>
                        <a className="akjslakslfkosdkas">
                            <ContentLink index={parseInt(key) + 1} router={router} {...item} />
                        </a>
                    </Link>)
            }
        </nav>
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