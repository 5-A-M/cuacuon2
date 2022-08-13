import React from 'react'

const ImageLeft = (props) => {
  return (
    <div className="dsjhkajhsklesasae" style={{width: "50%", padding: 10}}>
      {/* eslint-disable-next-line */}
      <img src={props.photo} alt="Open" className="dashaishjofjhanas" style={{width: "100%", borderRadius: 10, overflow: "hidden", height: "auto", border: "1px solid #e7e7e7"}} />
      <div style={{fontSize: 24}}>Giá ưu đãi: <span style={{fontSize: 32, color: "red" }}>{props.price}</span></div>
    </div>
  )
}

export default ImageLeft