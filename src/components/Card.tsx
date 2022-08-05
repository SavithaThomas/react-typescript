import React from "react";
import "antd/dist/antd.css";
import { useState } from 'react';
import { Layout, Menu } from "antd";
import { Col, Row } from "antd";
import Newcard from "../components/Cardcreate";
import "antd/dist/antd.css";
import "./Sidebar.css";
const { Header, Content, Sider } = Layout;


const Card = () => {
    return (
  
 <Content
 style={{
  marginTop: '40px',padding:'20px', 
 }} >
 <div
   className="site-layout-background"
   style={{
    //  padding: '10px',
     // margin: '10px',
    //  minHeight:'1000 px',
    //  marginTop:"-25px" ,
    //  marginRight:'0px',     
   }}
 >
   <Newcard />
    </div>
    </Content>
    
    )
}
export default Card;