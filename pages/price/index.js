import BreakLine from "../components/BreakLine";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Head from "next/head";
import * as React from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import axios from "axios";
import { SERVER_URL } from "../_app";
import CloseIcon from "@mui/icons-material/Close";

const Price = (props) => {
  return (
    <>
      <Head>
        <meta content="origin" name="referrer" />
        <meta name="description" content={"Đăng ký nhận báo giá"} />
        <meta name="keywords" content="mua, báo giá" />
        <title>Đăng ký nhận báo giá</title>
      </Head>
      <Header />
      <Navigation />
      <div
        className="fhjkdhjlksjaksleaew"
        style={{
          width: "100%",
          backgroundColor: "#fff",
          position: "relative",
          zIndex: 16,
          padding: 100,
        }}
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
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(() => "");
  const [address, setAddress] = React.useState(() => "");
  const [phoneNumber, setPhoneNumber] = React.useState(() => "");
  const [description, setDescription] = React.useState(() => "");
  const submit = async () => {
    const res = await axios({
      url: `${SERVER_URL}/contact/advise`,
      method: "POST",
      data: {
        name,
        address,
        phoneNumber,
        description,
      },
    });
    const result = await res.data;
    setName(()=> "")
    setAddress(()=> "")
    setPhoneNumber(()=> "")
    setDescription(()=> "")
    return setOpen(()=> true)
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Hoàn tác
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <div
        className="fdjhldjaklsjkasas"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="djklsdjalsjaklsas" style={{ width: 450 }}>
          <input
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              height: 40,
              border: "1px solid #e7e7e7",
              outline: "none",
              padding: 5,
              fontSize: 16,
              color: "#000",
              background: "#fff",
            }}
            placeholder="Tên khách hàng"
            type="text"
            id="fullname"
            name="fullname"
          />
          <input
            style={{
              width: "100%",
              height: 40,
              border: "1px solid #e7e7e7",
              outline: "none",
              padding: 5,
              fontSize: 16,
              color: "#000",
              background: "#fff",
            }}
            placeholder="Địa chỉ"
            type="text"
            id="address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            style={{
              width: "100%",
              height: 40,
              border: "1px solid #e7e7e7",
              outline: "none",
              padding: 5,
              fontSize: 16,
              color: "#000",
              background: "#fff",
            }}
            placeholder="Số điện thoại"
            type="text"
            id="phonenumber"
            name="phonenumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            style={{
              width: "100%",
              height: 40,
              border: "1px solid #e7e7e7",
              outline: "none",
              padding: 5,
              fontSize: 16,
              color: "#000",
              background: "#fff",
            }}
            placeholder="Mô tả"
            type="text"
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 16,
        }}
      >
        <Button onClick={() => submit()} variant={"contained"}>
          Gửi
        </Button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Gửi tư vấn thành công"
        action={action}
      />
    </React.Fragment>
  );
};

export default Price;
