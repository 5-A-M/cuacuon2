import axios from "axios";
import React from "react";
import { SERVER_URL } from "../../_app";

const DetailRight = (props) => {
  if(props.is_admin=== "true" && props.is_edit=== "true") {
    const changeProduct= async ()=> {
      const res= await axios({
        url: `${SERVER_URL}/change/product`,
        method: "put",
        data: {
          ...props
        }
      })
      const result= await res.data
      return window.location.reload()
    }
    const deleteProduct= async ()=> {
      const res= await axios({
        url: `${SERVER_URL}/delete/product`,
        method: "delete", 
        data: {
          ...props
        }
      })
      const result= await res.data
      return window.location.reload()
    }
    return (
      <div className="dsjkldjhlksajskassa" style={{ width: "50%", padding: 10 }}>
        <table className="hsjkdashjdkjdsa" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <TD2C title={"Thông tin sản phẩm"} />
            </tr>
            {
              props.name &&
              <tr>
                <td>Tên sản phẩm</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.name} onChange={(e)=> props.setInfo(prev=> ({...prev, name: e?.target?.value || props.name}))} />
              </tr>
            }
            {/* for accessory */}
            {
              props.type &&
              <tr>
                <td>Loại khóa</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.type} onChange={(e)=> props.setInfo(prev=> ({...prev, type: e?.target?.value || props.type}))} />
              </tr>
            }
            {
              props.color &&
              <tr>
                <td>Màu sắc</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.color} onChange={(e)=> props.setInfo(prev=> ({...prev, color: e?.target?.value || props.color}))} />
              </tr>
            }
            {
              props.keyIncluded &&
              <tr>
                <td>Số chìa đi kèm</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.keyIncluded} onChange={(e)=> props.setInfo(prev=> ({...prev, keyIncluded: e?.target?.value || props.keyIncluded}))} />
              </tr>
            }
            {
              props.material &&
              <tr>
                <td>Chất liệu</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.material} onChange={(e)=> props.setInfo(prev=> ({...prev, material: e?.target?.value || props.material}))} />
              </tr>
            }
            {
              props.handCover &&
              <tr>
                <td>Tay ốp</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.handCover} onChange={(e)=> props.setInfo(prev=> ({...prev, handCover: e?.target?.value || props.handCover}))} />

              </tr>
            }
            {
              props.lockBody &&
              <tr>
                <td>Thân khóa</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.lockBody} onChange={(e)=> props.setInfo(prev=> ({...prev, lockBody: e?.target?.value || props.lockBody}))} />

              </tr>
            }
            {/*  */}
            {
              props.code &&
              <tr>
                <td>Mã sản phẩm:</td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.code} onChange={(e)=> props.setInfo(prev=> ({...prev, code: e?.target?.value || props.code}))} />

              </tr>
            }
            {
              props.openAir &&
              <tr>
                <td>Ô thoáng: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.openAir} onChange={(e)=> props.setInfo(prev=> ({...prev, openAir: e?.target?.value || props.openAir}))} />

              </tr>
            }
            {
              props.is_accessory !== true &&
              <tr>
                <TD2C title={"Vật liệu cấu tạo"} />
              </tr>
            }
            {
              props.steelForWings &&
              <tr>
                <td>Thép làm cánh: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.steelForWings} onChange={(e)=> props.setInfo(prev=> ({...prev, steelForWings: e?.target?.value || props.steelForWings}))} />

              </tr>
            }
            {
              props.steelForFrame &&  
              <tr>
                <td>Thép làm khung: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.steelForFrame} onChange={(e)=> props.setInfo(prev=> ({...prev, steelForFrame: e?.target?.value || props.steelForFrame}))} />

              </tr>
            }
            {
              props.steelMaterial &&
              <tr>
                <td>Chất liệu thép: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.steelMaterial} onChange={(e)=> props.setInfo(prev=> ({...prev, steelMaterial: e?.target?.value || props.steelMaterial}))} />

              </tr>
            }
            {
              props.surface &&
              <tr>
                <td>Bề mặt: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.surface} onChange={(e)=> props.setInfo(prev=> ({...prev, surface: e?.target?.value || props.surface}))} />

              </tr>
            }
            {
              props.thickWings &&
              <tr>
                <td>Độ dày cánh: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.thickWings} onChange={(e)=> props.setInfo(prev=> ({...prev, thickWings: e?.target?.value || props.thickWings}))} />

              </tr>
            }
            {
              props.glassDoor &&
              <tr>
                <td> Kính trên cánh cửa: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.glassDoor} onChange={(e)=> props.setInfo(prev=> ({...prev, glassDoor: e?.target?.value || props.glassDoor}))} />

              </tr>
            }
            {
              props.is_accessory !== true && 
              <tr>
                <TD2C title={"Kích thước ô chờ giới hạn"} />
              </tr>
            }
            {
              props.width &&
              <tr>
                <td>Chiều rộng: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.width} onChange={(e)=> props.setInfo(prev=> ({...prev, width: e?.target?.value || props.width}))} />

              </tr>
            }
            {
              props.height &&
              <tr>
                <td>Chiều cao: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.height} onChange={(e)=> props.setInfo(prev=> ({...prev, height: e?.target?.value || props.height}))} />

              </tr>
            }
            {
              props.is_accessory !== true &&
              <tr>
                <TD2C title={"Phụ kiện cửa"} />
              </tr>
            }
            {
              props.lock &&
              <tr>
                <td>Khóa: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.lock} onChange={(e)=> props.setInfo(prev=> ({...prev, lock: e?.target?.value || props.lock}))} />

              </tr>
            }
            {
              props.hinge &&
              <tr>
                <td>Bản lề: </td>
                <input style={{width: "100%", height: "100%", fontSize: 16}} value={props.hinge} onChange={(e)=> props.setInfo(prev=> ({...prev, hinge: e?.target?.value || props.hinge}))} />
              </tr>
            }
          </tbody>
        </table>
        <div style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", margin: "16px 0", gap: 30}}>
          <button onClick={()=> changeProduct()} style={{padding: "10px 30px", background: "#2e89ff", color: "#fff", fontWeight: 600, borderRadius: 80, outline: "none", border: "none", cursor: "pointer"}}>Cập nhật</button>
          <button onClick={()=> deleteProduct()} style={{padding: "10px 30px", background: "#f00", color: "#fff", fontWeight: 600, borderRadius: 80, outline: "none", border: "none", cursor: "pointer"}}>Xóa sản phẩm</button>
        </div>
      </div>
    );
  }
  else {
    <NotEdit {...props} />
  }
};

export default DetailRight;

const TD2C= (props)=> {
    return (
        <td colSpan={2} className="dsaljkajshlkajsdas" style={{textAlign: "center"}}>
            <span className="jksldkaslawkeol" style={{textAlign: "center", fontSize: 20, color: "#f00", fontWeight: 600, textTransform: "uppercase"}}>{props.title}</span>
        </td>
    )
}

const NotEdit= (props)=> {
  return (
    <div className="dsjkldjhlksajskassa" style={{ width: "50%", padding: 10 }}>
      <table className="hsjkdashjdkjdsa" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <TD2C title={"Thông tin sản phẩm"} />
          </tr>
          {
            props.name &&
            <tr>
              <td>Tên sản phẩm</td>
              <td contentEditable>{props.name}</td>
            </tr>
          }
          {/* for accessory */}
          {
            props.type &&
            <tr>
              <td>Loại khóa</td>
              <td>{props.type}</td>
            </tr>
          }
          {
            props.color &&
            <tr>
              <td>Màu sắc</td>
              <td>{props.color}</td>
            </tr>
          }
          {
            props.keyIncluded &&
            <tr>
              <td>Số chìa đi kèm</td>
              <td>{props.keyIncluded}</td>
            </tr>
          }
          {
            props.material &&
            <tr>
              <td>Chất liệu</td>
              <td>{props.material}</td>
            </tr>
          }
          {
            props.handCover &&
            <tr>
              <td>Tay ốp</td>
              <td>{props.handCover}</td>
            </tr>
          }
          {
            props.lockBody &&
            <tr>
              <td>Thân khóa</td>
              <td>{props.lockBody}</td>
            </tr>
          }
          {/*  */}
          {
            props.code &&
            <tr>
              <td>Mã sản phẩm:</td>
              <td>{props.code}</td>
            </tr>
          }
          {
            props.openAir &&
            <tr>
              <td>Ô thoáng: </td>
              <td>{props.openAir}</td>
            </tr>
          }
          {
            props.is_accessory !== true &&
            <tr>
              <TD2C title={"Vật liệu cấu tạo"} />
            </tr>
          }
          {
            props.steelForWings &&
            <tr>
              <td>Thép làm cánh: </td>
              <td>{props.steelForWings}</td>
            </tr>
          }
          {
            props.steelForFrame &&  
            <tr>
              <td>Thép làm khung: </td>
              <td>{props.steelForFrame}</td>
            </tr>
          }
          {
            props.steelMaterial &&
            <tr>
              <td>Chất liệu thép: </td>
              <td>{props.steelMaterial}</td>
            </tr>
          }
          {
            props.surface &&
            <tr>
              <td>Bề mặt: </td>
              <td>{props.surface}</td>
            </tr>
          }
          {
            props.thickWings &&
            <tr>
              <td>Độ dày cánh: </td>
              <td>{props.thickWings}</td>
            </tr>
          }
          {
            props.glassDoor &&
            <tr>
              <td> Kính trên cánh cửa: </td>
              <td>{props.glassDoor}</td>
            </tr>
          }
          {
            props.is_accessory !== true && 
            <tr>
              <TD2C title={"Kích thước ô chờ giới hạn"} />
            </tr>
          }
          {
            props.width &&
            <tr>
              <td>Chiều rộng: </td>
              <td>{props.width}</td>
            </tr>
          }
          {
            props.height &&
            <tr>
              <td>Chiều cao: </td>
              <td>{props.height}</td>
            </tr>
          }
          {
            props.is_accessory !== true &&
            <tr>
              <TD2C title={"Phụ kiện cửa"} />
            </tr>
          }
          {
            props.lock &&
            <tr>
              <td>Khóa: </td>
              <td>{props.lock}</td>
            </tr>
          }
          {
            props.hinge &&
            <tr>
              <td>Bản lề: </td>
              <td>{props.hinge}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}