import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import Head from "next/head"
import axios from "axios";
import { SERVER_URL } from "../_app";
import { useRouter } from "next/router";


const LoginAdmin = (props) => {
  const [info, setInfo]= useState(()=> {})
  const [l, setL]= useState(()=> undefined)
  const router= useRouter()
  const login= async ()=> {
    const res= await axios({
        url: `${SERVER_URL}/admin/login`,
        method: "post",
        data: {
            ...info
        }
    })
    const result= await res.data
    if(result=== "success" ) {
        setL(()=> true)
        // navigate("/admin", {is_login: true})
        sessionStorage.setItem("admin", true)
    }
    else {
        setL(()=> false)
        sessionStorage.setItem("admin", true)
    }
  }
  useEffect(()=> {
    console.log(sessionStorage.getItem("admin"))
    if(sessionStorage.getItem("admin") === "true") {
      router.push("/admin")
    }
  }, [router])
  return (
    <Fragment>
      <Head>
        <title>Login admin</title>
      </Head>
      <div className="container">
        <div id="form">
          <h3>admin login</h3>
          <fieldset>
            <label htmlFor="phone">Account:</label>
            <input onChange={(e)=> setInfo(prev=> ({...prev, account: e.target.value}))} type="text" name="text" id="email" required />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Password:</label>
            <input onChange={(e)=> setInfo(prev=> ({...prev, password: e.target.value}))} type="password" name="password" id="password" required />
          </fieldset>
          <fieldset>
            <button onClick={login}>
              submit
            </button>
          </fieldset>
            {
                l=== false &&
            <div style={{fontSize: 16, fontWeight: 600}}>Tài khoản học mật khẩu không chính xác</div>
            }
        </div>
      </div>
    </Fragment>
  );
};

export default LoginAdmin;
