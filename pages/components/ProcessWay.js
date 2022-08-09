import React from "react";

const ProcessWay = (props) => {
  return (
    <div className="dsjkajhksljaessa" style={{ width: "100%" }}>
      <div className="info-home row">
        <div
          className="quy-trinh"
          style={{
            textAlign: "center",
            fontSize: 32,
            fontWeight: 600,
            margin: "16px 0",
            color: "#3a3b3c",
          }}
        >
          Quy trình đơn giản và nhanh chóng
        </div>
        <div
          className="jjaskljskaljskasasa"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-xs-12 col-sm-3 jksdjklasjasksas">
            <p>
              <img
                src="https://koffmann.vn/assets/uploads/images/1.jpg"
                alt="tuvan"
                title="tuvan"
              />
            </p>
            <div className="tieu-de-top">
              {" "}
              Khách hàng lựa chọn mẫu sản phẩm yêu thích{" "}
            </div>
            <p></p>
          </div>
          <div className="col-xs-12 col-sm-3 jksdjklasjasksas">
            <p>
              <img
                src="https://koffmann.vn/assets/uploads/images/2.jpg"
                alt="ship"
                title="ship"
              />
            </p>
            <div className="tieu-de-top">
              Xác định kích thước và báo giá theo yêu cầu{" "}
            </div>
            <p></p>
          </div>
          <div className="col-xs-12 col-sm-3 jksdjklasjasksas">
            <p>
              <img
                src="https://koffmann.vn/assets/uploads/images/3.jpg"
                alt="nhanhang"
                title="nhanhang"
              />
            </p>
            <div className="tieu-de-top">
              Xác nhận đơn đặt hàng và tiến hành sản xuất{" "}
            </div>
            <p></p>
          </div>
          <div className="col-xs-12 col-sm-3 jksdjklasjasksas">
            <p>
              <img
                src="https://koffmann.vn/assets/uploads/images/4.jpg"
                alt="hotline"
                title="hotline"
              />
            </p>
            <div className="tieu-de-top">
              Lắp đặt, bàn giao hoàn thiện và thanh toán{" "}
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessWay;
