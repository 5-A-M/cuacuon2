import React, { Fragment } from 'react'
import BreakLine from './BreakLine'
import { ComponentLeftSide } from './ListProducts'

const HoverListProducts = (props) => {
  return (
    <Fragment>
        {
          parseInt(props.index) === 3 && 
          <div className="dhjaishjioheioawjsa" style={{width: "100%", padding: 12, display: "flex", justifyContent: "space-between", position: "fixed", background: "#fff", zIndex: 25, left: 0, top: 60, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#3a3b3c"}}>
            <Fragment>
              <ComponentLeftSide titleLeftSideComponent2={"Cửa thép vân gỗ"} arrayList={["Cửa vân thép một cánh", "Cửa vân thép 2 cánh đều", "Cửa vân thép gỗ 2 cánh lệch", "Cửa thép vân gỗ 4 cánh đều", "Cửa thép vân gỗ 4 cánh lệch", "Cửa sổ thép vân gỗ"]} />
              <ComponentLeftSide titleLeftSideComponent2={"Cửa thép luxury"} arrayList={["Cửa vân thép một Luxury", "Cửa vân thép Luxury thủy lục"]} />
              <ComponentLeftSide titleLeftSideComponent2={"Phụ kiện cửa"} arrayList={["Phụ kiện cửa thép vân gỗ", "Phụ kiện cửa thép chống cháy"]} />
            </Fragment>
          </div>
        }
        {
          parseInt(props.index) === 5 && 
          <div className="dsjidsjdklasjaiawq" style={{width: "300px", padding: 12, display: "flex", justifyContent: "space-between", position: "absolute", background: "#fff", zIndex: 25, left: 0, top: 60, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#3a3b3c"}}>
            <ComponentLeftSide titleLeftSideComponent2={"Cửa thép vân gỗ"} arrayList={["Cửa vân thép một cánh", "Cửa vân thép 2 cánh đều", "Cửa vân thép gỗ 2 cánh lệch", "Cửa thép vân gỗ 4 cánh đều", "Cửa thép vân gỗ 4 cánh lệch", "Cửa sổ thép vân gỗ"]} />
          </div>
        }
        {
          parseInt(props.index) === 6 && 
          <div className="dsjidsjdklasjaiawq" style={{width: "300px", padding: 12, display: "flex", justifyContent: "space-between", position: "absolute", background: "#fff", zIndex: 25, left: 0, top: 60, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#3a3b3c"}}>
            <ComponentLeftSide titleLeftSideComponent2={"Cửa thép luxury"} arrayList={["Cửa vân thép một Luxury", "Cửa vân thép Luxury thủy lục"]} />
          </div>
        }
        {
          parseInt(props.index) === 7 && 
          <div className="dsjidsjdklasjaiawq" style={{width: "300px", padding: 12, display: "flex", justifyContent: "space-between", position: "absolute", background: "#fff", zIndex: 25, left: 0, top: 60, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", color: "#3a3b3c"}}>
            <ComponentLeftSide titleLeftSideComponent2={"Phụ kiện cửa"} arrayList={["Phụ kiện cửa thép vân gỗ", "Phụ kiện cửa thép chống cháy"]} />
          </div>
        }
    </Fragment>
  )
}

export default HoverListProducts