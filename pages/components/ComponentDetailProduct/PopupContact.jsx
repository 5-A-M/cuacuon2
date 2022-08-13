import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import BreakLine from "../BreakLine";
import axios from "axios";
import { SERVER_URL } from "../../_app";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Lấy báo giá
      </Button>
      <DialogMain open={open} handleClose={handleClose} />
    </div>
  );
}

export const DialogMain = (props) => {
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
    props.handleClose();
  };
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div style={{ width: "100vw", maxWidth: 600, background: "#fff" }}>
        <div
          className="dsjslasjlkasasddsa"
          style={{
            background: "#2e89ff",
            height: 60,
            padding: 10,
            color: "#fff",
            fontSize: 24,
          }}
        >
          Lấy báo giá
        </div>
        <div className="dhjksahkjfdads" style={{ width: "100%", padding: 10 }}>
          <div>
            <div>Tên khách hàng</div>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="dhsjkshajkhsjkasa"
              style={{
                width: "100%",
                height: 50,
                border: "1px solid #e7e7e7",
                padding: 10,
                fontSize: 18,
                outlineColor: "#2e89ff",
              }}
              placeholder={"Nhập họ tên của bạn "}
            />
          </div>
          <BreakLine />
          <div>
            <div>Địa chỉ*</div>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="dhsjkshajkhsjkasa"
              style={{
                width: "100%",
                height: 50,
                border: "1px solid #e7e7e7",
                padding: 10,
                fontSize: 18,
                outlineColor: "#2e89ff",
              }}
              placeholder={"Nhập địa chỉ của bạn "}
            />
          </div>
          <BreakLine />
          <div>
            <div>Số điện thoại*</div>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="dhsjkshajkhsjkasa"
              style={{
                width: "100%",
                height: 50,
                border: "1px solid #e7e7e7",
                padding: 10,
                fontSize: 18,
                outlineColor: "#2e89ff",
              }}
              placeholder={"Nhập số điện thoại của bạn "}
            />
          </div>
          <BreakLine />
          <div>
            <div>Mô tả</div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="dhsjkshajkhsjkasa"
              style={{
                width: "100%",
                minHeight: 100,
                border: "1px solid #e7e7e7",
                padding: 10,
                fontSize: 18,
                outlineColor: "#2e89ff",
                resize: "vertical",
              }}
              placeholder={"Nhập mô tả của bạn"}
            />
          </div>
          <BreakLine />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={() => submit()} variant={"contained"}>
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
