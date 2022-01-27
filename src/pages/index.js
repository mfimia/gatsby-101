import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  // contains info about the images in images folder
  const imageSrc = data.allFile.nodes.filter((node) => node.name === "codegif");
  console.log(imageSrc[0]);

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/codegif.gif"
      />
    </Layout>
  );
};

// currently not working
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        relativeDirectory
        absolutePath
        name
      }
    }
  }
`;

export default IndexPage;
