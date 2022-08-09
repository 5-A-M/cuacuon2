import React from 'react'
import EnumServices from './EnumServices'

const IntroduceCompany = () => {
  return (
    <div className="dshjdajaklsjasw" style={{width: "100%", background: "#FFF", marginTop: -5, height: "auto"}}>
        <TitleIntroduce title={"Tổng kho cửa hàng thép vân gỗ"} />
        <EnumServices />
        <TitleIntroduce title={"Là đơn vị phân phối cung cấp sản phẩm chất lượng"} />
    </div>
  )
}

const TitleIntroduce= (props)=> {
    return (
        <div className="jaksjakujwieaw" style={{textAlign: "center", fontSize: 30, fontWeight: 600, color: "#000", padding: "30px 0"}}>
            {props.title}
        </div>
    )
}

export default IntroduceCompany