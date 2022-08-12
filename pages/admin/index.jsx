import React, { useEffect } from "react";
import Navigation from "../components/ComponentForAdmin/Navigation";
import Title from "../components/ComponentForAdmin/Title";
import Head from "next/head"
import { useRouter } from "next/router";

const Admin = (props) => {
  const router= useRouter()
  useEffect(()=> {
    console.log(sessionStorage.getItem("admin"))
    if(sessionStorage.getItem("admin") !== "true") {
      router.push("/admin/login")
    }
  }, [router])
  useEffect(() => {
    if (sessionStorage.getItem("admin") === "true") {
      router.push("/admin/manage-products");
    }
  }, [router]);
  return (
    <div className="fhsdukruilsjalxas">
      <Head>
        <title>Admin page</title>
      </Head>
      <Title />
      <Navigation />
    </div>
  );
};

export default Admin;
