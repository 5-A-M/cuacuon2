import React from "react";

const ContactPhonenumber = (props) => {
  return (
    <div onClick={()=> window.location.href= "tel://0962839883"} id="wrapper" >
      <div className="ring" style={{width: "100%", height: "100%"}}>
        <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
          <div className="coccoc-alo-ph-circle"></div>
          <div className="coccoc-alo-ph-circle-fill"></div>
          <div className="coccoc-alo-ph-img-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPhonenumber;
