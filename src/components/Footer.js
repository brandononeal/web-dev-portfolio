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
          target="blank"
        >
          <FileTextOutlined /> Resume{" "}
        </a>
        <a href="https://www.github.com/brandononeal" target="blank">
          <GithubOutlined /> GitHub{" "}
        </a>
        <a href="https://www.linkedin.com/in/brandonaoneal" target="blank">
          <LinkedinOutlined /> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
