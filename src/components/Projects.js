import React from "react";
import { RocketOutlined, GithubOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function Projects() {
  return (
    <div className="Projects">
      <br />
      <div className="banner section1">
        <div className="paralax" />
      </div>
      <div>
        <h2>Family Promise: Shelter Management System</h2>
        <h3>Design Lead - React</h3>
        <a
          href="https://github.com/brandononeal/family-promise-spokane-fe-a"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined /> GitHub Repo{" "}
        </a>
        <a
          href="https://brandononeal.medium.com/designing-a-homeless-shelter-management-system-5213636b8f40"
          target="_blank"
          rel="noreferrer"
        >
          <RocketOutlined /> Medium Article
        </a>
        <ul>
          <li>
            Collaborated with team of 5 developers to implement UI updates in
            React which included using more intuitive design patterns, more
            consistent placement of content, and improved user flow throughout
          </li>
          <li>
            Used Ant Design to quickly implement high-quality layout features
            which included updated sidebar navigation, more accurate icons,
            better table organization, and profile avatars with dropdowns
          </li>
          <li>
            Built out user dashboard which allowed supervisors and guests to
            view and update their profile information in one organized location
          </li>
        </ul>
      </div>

      <br />
      <Divider />
      <br />
      <div className="banner section2">
        <div className="paralax" />
      </div>
      <div>
        <h2>Family Promise: Service Tracker</h2>
        <h3>Backend Engineer - Node.js</h3>
        <a
          href="https://github.com/brandononeal/family-promise-service-tracker-be-a"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined /> GitHub Repo{" "}
        </a>
        <a
          href="https://brandononeal.medium.com/developing-a-service-tracker-for-family-promise-742a93cdb3f4"
          target="_blank"
          rel="noreferrer"
        >
          <RocketOutlined /> Medium Article
        </a>
        <ul>
          <li>
            Utilized Node.js to create endpoints, models, routers, seed data,
            and authorization middleware to track services provided by service
            providers
          </li>
          <li>
            Used Knex to create migrations for programs, services, users, and
            their respective join tables
          </li>
          <li>
            Designed database schema in Whimsical to be generic enough that it
            could be applied to wide range of industries which will allow the
            API to scale quickly in the future
          </li>
        </ul>
      </div>

      <br />
      <Divider />
      <br />
      <div className="banner section3">
        <div className="paralax" />
      </div>
      <div>
        <h2>Anywhere Fitness</h2>
        <h3>UI Designer - HTML/CSS</h3>
        <a
          href="https://github.com/Build-Wk-Anywhere-Fitness-3/ui"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined /> GitHub Repo{" "}
        </a>
        <a
          href="https://build-wk-anywhere-fitness-3.github.io/ui/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <RocketOutlined /> Deployed Application
        </a>
        <ul>
          <li>
            Created landing page from scratch using semantic HTML and CSS that
            is responsive to multiple breakpoints on desktop, tablet, and mobile
            devices using media queries
          </li>
          <li>
            Implemented design choices from Figma wireframe to create a
            minimalist, parallax scrolling experience which focuses on directing
            users to the main application
          </li>
        </ul>
      </div>

      <br />
      <Divider />
      <br />
      <div className="banner section4">
        <div className="paralax" />
      </div>
      <div>
        <h2>Water My Plants</h2>
        <h3>Frontend Engineer - React</h3>
        <a
          href="https://github.com/Build-Wk-Water-My-Plants/front-end"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined /> GitHub Repo{" "}
        </a>
        <a
          href="https://water-my-plants-mu.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <RocketOutlined /> Deployed Application
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Projects;
