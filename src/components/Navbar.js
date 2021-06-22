import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  CodeOutlined,
  MailOutlined,
  FileTextOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function Navbar() {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="Navbar">
      <h2>
        <Link to="/">Brandon O'Neal</Link>
      </h2>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="projects" icon={<CodeOutlined />}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="resume" icon={<FileTextOutlined />}>
          <a
            href="https://docs.google.com/document/d/1DV-lUf8bv02Be29jFoH-4b_TUGkMLsYCSMpRE5BTtvQ/edit"
            target="blank"
          >
            Resume
          </a>
        </Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}>
          <a href="https://www.github.com/brandononeal" target="blank">
            GitHub
          </a>
        </Menu.Item>
        <Menu.Item key="linkedin" icon={<LinkedinOutlined />}>
          <a href="https://www.linkedin.com/in/brandonaoneal" target="blank">
            LinkedIn
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
