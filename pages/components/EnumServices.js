import React from 'react'

const EnumServices = (props) => {
  return (
    <div className="dakjsjakjrkwaers" style={{width: "100%", }}>
        <TitleEnum title={"Là đơn vị chuyên phân phối: "} />
        <EnumDetail />
    </div>
  )
}

const TitleEnum= (props)=> {
    return (
        <div className="daiujeiwajsaas" style={{fontSize: 20, fontWeight: 600, color: "#000"}}>
            {props?.title}
        </div>
    )
}

const EnumDetail= (props)=> {
    const list_array= ["Cửa thép vân gỗ", "Cửa quấn", "Cửa nhựa con dò site", "Cửa nhôm kính", "Cửa thủy lực", "Rooman giả đồng"]
    return (
        <div className="sjiejsklajskaw" style={{width: "100%"}}>
            <ul className="dskaldjekfdljase" style={{width: "100%"}}>
                {
                    list_array.map((item, key)=> <li className="ashasjkawaiow" style={{color: "#000", marginLeft: 200, fontSize: 18}} key={key}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default EnumServices