import BreakLine from "../components/BreakLine";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Head from "next/head"

const Price = (props) => {
  return (
    <>
      <Head>
        <title>
          Đăng ký nhận báo giá
        </title>
      </Head>
      <Header />
      <Navigation />
      <div
        className="fhjkdhjlksjaksleaew"
        style={{ width: "100%", backgroundColor: "#fff", position: "relative" ,zIndex: 16, padding: 100}}
      >
        <Title title={"Nhận đăng ký báo giá"} />
        <BreakLine />
        <FormBookPrice />
      </div>
    </>
  );
};

const Title = (props) => {
  return (
    <div
      className="djklsjaklsjaksajksas"
      style={{ textAlign: "center", fontSize: 32, fontWeight: 600 }}
    >
      {props.title}
    </div>
  );
};

const FormBookPrice = (props) => {
  return (
    <div className="fdjhldjaklsjkasas" style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className="djklsdjalsjaklsas" style={{width: 450}}>
            <input style={{width: "100%", height: 40, border: "1px solid #e7e7e7", outline: "none", padding: 5, fontSize: 16, color: "#000", background: "#fff"}} placeholder="Tên khách hàng" type="text" id="fullname" name="fullname" />
            <input style={{width: "100%", height: 40, border: "1px solid #e7e7e7", outline: "none", padding: 5, fontSize: 16, color: "#000", background: "#fff"}} placeholder="Địa chỉ" type="text" id="address" name="address" />
            <input style={{width: "100%", height: 40, border: "1px solid #e7e7e7", outline: "none", padding: 5, fontSize: 16, color: "#000", background: "#fff"}} placeholder="Số điện thoại" type="text" id="phonenumber" name="phonenumber" />
            <input style={{width: "100%", height: 40, border: "1px solid #e7e7e7", outline: "none", padding: 5, fontSize: 16, color: "#000", background: "#fff"}} placeholder="Mô tả" type="text" id="description" name="description" />
        </div>
    </div>
  );
};

export default Price;
