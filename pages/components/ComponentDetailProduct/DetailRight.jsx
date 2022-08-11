import React from "react";

const DetailRight = (props) => {
  return (
    <div className="dsjkldjhlksajskassa" style={{ width: "50%", padding: 10 }}>
      <table className="hsjkdashjdkjdsa" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <TD2C title={"Thông tin sản phẩm"} />
          </tr>
          <tr>
            <td>Tên sản phẩm</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Mã sản phẩm:</td>
            <td>{props.code}</td>
          </tr>
          <tr>
            <td>Ô thoáng: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <TD2C title={"Vật liệu cấu tạo"} />
          </tr>
          <tr>
            <td>Thép làm cánh: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td>Thép làm khung: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td>Chất liệu thép: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td>Bề mặt: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td>Độ dày cánh: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td> Kính trên cánh cửa: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <TD2C title={"Kích thước ô chờ giới hạn"} />
          </tr>
          <tr>
            <td>Chiều rộng: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td>Chiều cao: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <TD2C title={"Phụ kiện cửa"} />
          </tr>
          <tr>
            <td>Khóa: </td>
            <td>{props.openAir}</td>
          </tr>
          <tr>
            <td>Bản lề: </td>
            <td>{props.openAir}</td>
          </tr>
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