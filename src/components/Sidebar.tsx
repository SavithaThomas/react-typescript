import React from "react";
import "antd/dist/antd.css";
import { useState } from 'react';
import { Layout, Menu } from "antd";
import images from "./Images";
import "./Sidebar.css";
const { Header, Content, Sider } = Layout;


const Sidebar = ()=> {
  return (
  <div className="sideb">
      <Sider className="SideBar">
          <div className="Logo">
            <img src={images.img1} alt=" "/>
          </div>
          <div className="mid">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            className="midicon"
          >
            <Menu.Item>
              <img src={images.img2} alt=" " />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img3} alt=" "/>
            </Menu.Item>
            <Menu.Item>
              <img src={images.img4} alt=" " className="midicon3" />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img5} alt=" " />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img6} alt=" " />
            </Menu.Item>
          </Menu>
          </div>
          <div className="boticon">
            <img src={images.img7} alt=" " />
            <img src={images.img8} alt=" "/>
            <img src={images.img9} alt=" " />
          </div>
        </Sider>
        </div>
  )
}
export default Sidebar;
      