import React from "react";
import Navigation from "../components/ComponentForAdmin/Navigation";
import Title from "../components/ComponentForAdmin/Title";
import Head from "next/head"

const Admin = (props) => {
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
