import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { CodeOutlined, MailOutlined } from "@ant-design/icons";

function Navbar() {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="Navbar">
      <h2>
        <Link to="/home">Brandon O'Neal</Link>
      </h2>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="projects" icon={<CodeOutlined />}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
