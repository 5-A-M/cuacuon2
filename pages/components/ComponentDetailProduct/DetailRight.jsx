import React from "react";

const DetailRight = (props) => {
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
              <td>{props.name}</td>
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
          <tr>
            <TD2C title={"Vật liệu cấu tạo"} />
          </tr>
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
          <tr>
            <TD2C title={"Kích thước ô chờ giới hạn"} />
          </tr>
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
          <tr>
            <TD2C title={"Phụ kiện cửa"} />
          </tr>
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
};

export default DetailRight;

const TD2C= (props)=> {
    return (
        <td colSpan={2} className="dsaljkajshlkajsdas" style={{textAlign: "center"}}>
            <span className="jksldkaslawkeol" style={{textAlign: "center", fontSize: 20, color: "#f00", fontWeight: 600, textTransform: "uppercase"}}>{props.title}</span>
        </td>
    )
}