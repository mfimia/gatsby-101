import * as React from "react";
import Layout from "../components/layout";
import codeGif from "../images/codegif.gif";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img
        style={{ maxWidth: 500 }}
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src={codeGif}
      />
    </Layout>
  );
};

export default IndexPage;
