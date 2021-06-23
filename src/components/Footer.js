import {
  FileTextOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-left">
        <h2>made by brandon</h2>
      </div>
      <div className="footer-right">
        <a
          href="https://docs.google.com/document/d/1DV-lUf8bv02Be29jFoH-4b_TUGkMLsYCSMpRE5BTtvQ/edit"
          target="_blank"
          rel="noreferrer"
        >
          <FileTextOutlined /> Resume{" "}
        </a>
        <a
          href="https://www.github.com/brandononeal"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined /> GitHub{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/brandonaoneal"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinOutlined /> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
