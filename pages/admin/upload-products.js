import { Fragment, useEffect } from "react";
import Navigation from "../components/ComponentForAdmin/Navigation";
import Title from "../components/ComponentForAdmin/Title";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { SERVER_URL } from "../_app";
import { Backdrop, CircularProgress } from "@mui/material";

const UploadProducts = (props) => {
  const [category, setCategory] = useState(() => "1");
  const [file, setFile] = useState(() => []);
  const [fileDataUrl, setFileDataUrl] = useState(() => []);
  const [name, setName] = useState(() => "");
  const [code, setCode] = useState(() => "");
  const [codeColor, setCodeColor] = useState(() => "");
  const [openAir, setOpenAir] = useState(() => "");
  const [steelForWings, setSteelForWings] = useState(() => "");
  const [steelForFrame, setSteelForFrame] = useState(() => "");
  const [steelMaterial, setSteelMaterial] = useState(() => "");
  const [surface, setSurface] = useState(() => "");
  const [thickWings, setThickWings] = useState(() => "");
  const [glassDoor, setGlassDoor] = useState(() => "");
  const [width, setWidth] = useState(() => "");
  const [height, setHeight] = useState(() => "");
  const [lock, setLock] = useState(() => "");
  const [hinge, setHinge] = useState(() => "");
  const [price, setPrice] = useState(() => "");
  const [loading, setLoading] = useState(() => false);
  const uploadCuacuon = async () => {
    setLoading(() => true);
    const formData = new FormData();
    formData.append("file", file[0].imgDataUrl);
    const res = await axios({
      url: `${SERVER_URL}/api/v2/upload`,
      method: "POST",
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    });
    const result = await res.data;
    const res2 = await axios({
      url: `${SERVER_URL}/api/v2/info/cuacuon`,
      method: "POST",
      responseType: "json",
      data: {
        name,
        code,
        codeColor,
        openAir,
        steelForWings,
        steelForFrame,
        steelMaterial,
        surface,
        thickWings,
        glassDoor,
        width,
        height,
        lock,
        hinge,
        price,
        photo: result.secure_url,
        category,
      },
    });
    const result2 = await res2.data;
    setLoading(() => false);
    return router.push("/admin/manage-products");
  };
  const [type, setType] = useState(() => "");
  const [color, setColor] = useState(() => "");
  const [keyIncluded, setKeyIncluded] = useState(() => "");
  const [material, setMaterial] = useState(() => "");
  const [handCover, setHandCover] = useState(() => "");
  const [lockBody, setLockBody] = useState(() => "");
  //
  const uploadPhukien = async () => {
    setLoading(() => true);
    const formData = new FormData();
    formData.append("file", file[0].imgDataUrl);
    const res = await axios({
      url: `${SERVER_URL}/api/v2/upload`,
      method: "POST",
      responseType: "json",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    });
    const result = await res.data;
    const res2 = await axios({
      url: `${SERVER_URL}/api/v2/info/phukien`,
      method: "POST",
      responseType: "json",
      data: {
        name,
        type,
        color,
        keyIncluded,
        material,
        handCover,
        lock,
        lockBody,
        photo: result.secure_url,
        category,
        price,
      },
    });
    const result2 = await res2.data;
    setLoading(() => false);
    return router.push("/admin/manage-products");
  };
  const [postDoor, setPostDoor] = useState(() => true);
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem("admin") !== "true") {
      router.push("/admin/login");
    }
  }, [router]);
  return (
    <Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Head>
        <title>Đăng sản phẩm</title>
      </Head>
      <Title />
      <Navigation />
      <div className="fsjidoajsioujeiowaa" style={{ padding: 10 }}>
        <select
          style={{ padding: 16, borderRadius: 10, cursor: "pointer" }}
          onChange={(e) => setCategory(parseInt(e.target.value))}
          className="Sjskdljsalksjadsas"
        >
          <option
            style={{ padding: 16, borderRadius: 10, cursor: "pointer" }}
            value={1}
          >
            Cửa thép vân gỗ
          </option>
          <option
            style={{ padding: 16, borderRadius: 10, cursor: "pointer" }}
            value={2}
          >
            Cửa thép luxury
          </option>
          <option
            style={{ padding: 16, borderRadius: 10, cursor: "pointer" }}
            value={3}
          >
            Phụ kiện cửa
          </option>
        </select>
        {/* <div style={{ margin: "16px 0", fontSize: 24 }}>
          {postDoor === true
            ? "Đăng sản phẩm cửa cuốn"
            : "Đăng sản phẩm phụ kiện"}{" "}
          <span
            onClick={() => setPostDoor((prev) => !prev)}
            style={{ fontSize: 16, color: "#2e89ff", cursor: "pointer" }}
          >
            Đổi
          </span>
        </div> */}
        <div style={{ margin: "16px 0", fontSize: 24, fontWeight: 600 }}>
          Chọn ảnh
        </div>
        <UploadImage
          file={file}
          fileDataUrl={fileDataUrl}
          setFile={setFile}
          setFileDataUrl={setFileDataUrl}
        />
        {category !== 3 && (
          <>
            <Input
              placeholder="Nhập tên sản phẩm"
              type="text"
              value={name}
              setValue={setName}
              title="Tên sản phẩm:"
            />
            <Input
              placeholder="Nhập mã sản phẩm"
              type="text"
              value={code}
              setValue={setCode}
              title="Mã sản phẩm:"
            />
            <Input
              placeholder="Nhập mã màu"
              type="text"
              value={codeColor}
              setValue={setCodeColor}
              title="Mã màu:"
            />
            <Input
              placeholder="Nhập ô thoáng"
              type="text"
              value={openAir}
              setValue={setOpenAir}
              title="Ô thoáng:"
            />
            <Input
              placeholder="Nhập thép làm cánh"
              type="text"
              value={steelForWings}
              setValue={setSteelForWings}
              title="Thép làm cánh:"
            />
            <Input
              placeholder="Nhập thép làm khung"
              type="text"
              value={steelForFrame}
              setValue={setSteelForFrame}
              title="Thép làm khung:"
            />
            <Input
              placeholder="Nhập Chất liệu thép"
              type="text"
              value={steelMaterial}
              setValue={setSteelMaterial}
              title="Chất liệu thép:"
            />
            <Input
              placeholder="Nhập Bề mặt"
              type="text"
              value={surface}
              setValue={setSurface}
              title="Bề mặt:"
            />
            <Input
              placeholder="Nhập độ dày cánh"
              type="text"
              value={thickWings}
              setValue={setThickWings}
              title="Độ dày cánh:"
            />
            <Input
              placeholder="Nhập kính trên cánh cửa"
              type="text"
              value={glassDoor}
              setValue={setGlassDoor}
              title="Kính trên cánh cửa:"
            />
            <Input
              placeholder="Nhập chiều rộng"
              type="text"
              value={width}
              setValue={setWidth}
              title="Chiều rộng: "
            />
            <Input
              placeholder="Nhập chiều cao"
              type="text"
              value={height}
              setValue={setHeight}
              title="Chiều cao: "
            />
            <Input
              placeholder="Nhập khóa"
              type="text"
              value={lock}
              setValue={setLock}
              title="Khóa: "
            />
            <Input
              placeholder="Nhập bản lề"
              type="text"
              value={hinge}
              setValue={setHinge}
              title="Bản lề: "
            />
            <Input
              placeholder="Nhập giá"
              type="text"
              value={price}
              setValue={setPrice}
              title="Giá"
            />
            <Button file={file} uploadCuacuon={uploadCuacuon} />
          </>
        )}
        {category === 3 && (
          <>
            <Input
              placeholder="Nhập tên sản phẩm"
              type="text"
              value={name}
              setValue={setName}
              title="Tên sản phẩm:"
            />
            <Input
              placeholder="Nhập loại khóa"
              type="text"
              value={type}
              setValue={setType}
              title="Loại khóa:"
            />
            <Input
              placeholder="Nhập màu sắc"
              type="text"
              value={color}
              setValue={setColor}
              title="Màu sắc:"
            />
            <Input
              placeholder="Nhập số chìa đi kèm"
              type="text"
              value={keyIncluded}
              setValue={setKeyIncluded}
              title="Số chìa đi kèm:"
            />
            <Input
              placeholder="Nhập chất liệu"
              type="text"
              value={material}
              setValue={setMaterial}
              title="Chất liệu:"
            />
            <Input
              placeholder="Nhập tay ốp"
              type="text"
              value={handCover}
              setValue={setHandCover}
              title="Tay ốp:"
            />
            <Input
              placeholder="Nhập thân khóa"
              type="text"
              value={lockBody}
              setValue={setLockBody}
              title="Thân khóa:"
            />
            <Input
              placeholder="Nhập ổ khóa"
              type="text"
              value={lock}
              setValue={setLock}
              title="Ổ khóa:"
            />
            <Input
              placeholder="Nhập giá"
              type="text"
              value={price}
              setValue={setPrice}
              title="Giá"
            />
            <Button file={file} uploadCuacuon={uploadPhukien} />
          </>
        )}
      </div>
    </Fragment>
  );
};

const UploadImage = (props) => {
  const onChangeFile = (e) => {
    if (e.target.files?.length > 0) {
      Object.values(e.target.files).map((item, key) =>
        props.setFile((prev) => [
          ...prev,
          { key: key, imgDataUrl: item, alt: item.name, id: item.lastModified },
        ])
      );
      Object.values(e.target.files).map((item, key) =>
        props.setFileDataUrl((prev) => [
          ...prev,
          {
            key: key,
            imgDataUrl: URL.createObjectURL(item),
            alt: item.name,
            id: item.lastModified,
          },
        ])
      );
    }
  };
  return (
    <div
      className="djskldjasklasqawaw"
      style={{
        width: "100%",
        minHeight: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="sjkldjsklsjaiowauwaws"
        style={{
          width: "100%",
          maxWidth: 600,
          minHeight: 350,
          borderRadius: 10,
          border: "1px solid #000",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          padding: 20,
        }}
      >
        {props.fileDataUrl?.length <= 0 && (
          <IconUpload onChangeFile={onChangeFile} />
        )}
        {props.fileDataUrl?.length > 0 && (
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 10,
              cursor: "pointer",
            }}
            data-tooltip="Close"
            onClick={() => {
              props.setFile(() => []);
              props.setFileDataUrl(() => []);
            }}
          >
            <AiOutlineClose />
          </div>
        )}
        {props.fileDataUrl?.map((item, key) => (
          <div
            key={key}
            className="jkldjksaldsasa"
            style={{
              height: "350px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* eslint-disable-next-line */}
            <img
              alt="open"
              src={item.imgDataUrl}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const IconUpload = (props) => {
  return (
    <div
      data-tooltip="Choose one or multiple images"
      className="fjskdjhdlkasaeaaw"
      style={{
        width: 50,
        height: 50,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <AiOutlineUpload size={60} />
      <input
        onChange={props.onChangeFile}
        accept="image/*"
        type="file"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          position: "absolute",
          top: 0,
          left: 0,
          cursor: "pointer",
          borderRadius: 10,
          overflow: "hidden",
        }}
        title=""
      />
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="dajskajskdassasa">
      <p style={{ fontSize: 18, fontWeight: 600 }}>{props.title}</p>
      <input
        style={{
          height: 50,
          width: "100%",
          fontSize: 18,
          borderRadius: 10,
          border: "1px solid #000",
          outlineColor: "#2e89ff",
          padding: 5,
        }}
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const Button = (props) => {
  if (props.file.length > 0) {
    return (
      <div
        onClick={() => props.uploadCuacuon()}
        className="kaslaskolaskasawaw"
        style={{
          padding: "10px 30px",
          borderRadius: 80,
          background: "#2e89ff",
          color: "#fff",
          fontSize: 18,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 16,
          cursor: "pointer",
        }}
      >
        Đăng sản phẩm
      </div>
    );
  } else {
    return (
      <div
        className="kaslaskolaskasawaw"
        style={{
          padding: "10px 30px",
          borderRadius: 80,
          background: "#2e89ff",
          color: "#fff",
          fontSize: 18,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 16,
          cursor: "not-allowed",
          opacity: 0.5,
        }}
      >
        Thiếu dữ liệu
      </div>
    );
  }
};

export default UploadProducts;
