import React from "react";
import "antd/dist/antd.css";

import { useState } from 'react';
import { Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Form,Input, Button,Modal } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import "./Sidebar.css";

import values from "./Constants"
import Searchbar from "./Searchbar"
import Createflow from "./Createflow";
import { SearchOutlined } from "@ant-design/icons";
const { Header, Content, Sider} = Layout;
const { TextArea } = Input;


const Headbar=({refresh,cardIndex}:any) => {

    // const [isModal, setIsModalVisible] = useState(false);  
    // const [name, setName] = useState('');
    // const [desig, setDesig] = useState('');
    // const [details,setDetails]=useState('');
    // const [img,setImage]=useState(''); 
    // const [isSearch, setIsSearch] = useState("");

     
    //  const handle = () => {  

    //   let empdetails= JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);
    //   const empdata=Object.values(empdetails);      
    //   let payload: any ={
    //     id:empdata.length,
    //     name:name,
    //     designation:desig,
    //     det: details
    //   }      
    //   empdetails.push(payload);
    //   localStorage.setItem('empdetails', JSON.stringify(empdetails));  
    //   refresh();  
    //   setIsModalVisible(false);  
    //  };
     
    // const showModal = () => {  
    //   setIsModalVisible(true);   
    //   };
  
    // const handleCancel = () => {  
    //   setIsModalVisible(false);   
    //       };
  
  
    //     const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    //       const reader = new FileReader();
    //       reader.addEventListener('load', () => callback(reader.result as string));
    //       reader.readAsDataURL(img);
    //     };
        
    //     const beforeUpload = (file: RcFile) => {
    //       const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    //       if (!isJpgOrPng) {
    //         message.error('You can only upload JPG/PNG file!');
    //       }
    //       const isLt2M = file.size / 1024 / 1024 < 2;
    //      if (!isLt2M) {
    //         message.error('Image must smaller than 2MB!');
    //       }
    //       return isJpgOrPng && isLt2M;
    //       };
    //       const [loading, setLoading] = useState(false);
    // const [imageUrl, setImageUrl] = useState<string>();
  
    // const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    //   if (info.file.status === 'uploading') {
    //     setLoading(true);
        
    //     return;
    //   }
    //   if (info.file.status === 'done') {
    //     // Get this url from response in real world.
    //     getBase64(info.file.originFileObj as RcFile, url => {
    //       setLoading(false);
    //       setImageUrl(url);
    //     });
    //   }
    // };
  
    // const uploadButton = (
    //   <div>
    //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //     <div style={{ marginTop: 8 }}>Upload</div>
    //   </div>
    // );

return (            
          <Header>            
            <Row className="headpart"> 
              <Col span={6}>
                <p className="lefthead">{values.heading}</p>
              </Col>
              <Searchbar cardIndex={cardIndex}/> 
              <Createflow refresh={refresh} />               
            </Row>           
          </Header>                     
        )
    }
    export default Headbar;