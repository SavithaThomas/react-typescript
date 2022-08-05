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
const { TextArea } = Input;

const Createflow = ({refresh}:any) => {

const [isModal, setIsModalVisible] = useState(false);  
const [name, setName] = useState('');
const [desig, setDesig] = useState('');
const [details,setDetails]=useState('');
const [img,setImage]=useState(''); 

const handle = () => {  

let empdetails= JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);
const empdata=Object.values(empdetails);      
let payload: any ={
    id:empdata.length,
    name:name,
    designation:desig,
    det: details
  }      
empdetails.push(payload);
localStorage.setItem('empdetails', JSON.stringify(empdetails));    
setName('');
setDesig('');
setDetails('');
setIsModalVisible(false);  
refresh();  
 };
 
const showModal = () => {    
setIsModalVisible(true);   
};

const handleCancel = () => {  
setName('');
setDesig('');
setDetails('');
setIsModalVisible(false);   
};


    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
    };
    
    const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
      };
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
    setLoading(true);
    return;
    }
    if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj as RcFile, url => {
    setLoading(false);
     setImageUrl(url);
    });
    }
    };

const uploadButton = (
 <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div style={{ marginTop: 8 }}>Upload</div>
 </div>
);
return (
<Col span={6} className="headright">
<Button className="btn3"  type="primary" onClick={showModal} >{values.newwork}</Button>
<Modal  title="Setup Employee"  centered visible={isModal} footer={null}  >
<Row className="workmodal">                
<Col>
<Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
                // (e:any) => setImage(e.target.file)
                >
                {imageUrl ? <img src={imageUrl} alt="avatar"  /> : uploadButton}
            </Upload>           
</Col>
{/* <div className="empmodal"> */}
<Col span={8}>              
<p className="popup">Employee Name</p>                                
<p className="popup">Employee Designation </p>                                
<p className="popup">Employee Details</p>
</Col>
<Col span={10}>                   
<Input className="text" id ="test1"   value={name} onChange={(e:any) => setName(e.target.value)}/>                    
<Input className="text" id="test2"   value={desig} onChange={(e:any) => setDesig(e.target.value)} />
<TextArea className="text1"
                autoSize={{ minRows: 3, maxRows: 5 }}                                
                onChange={(e:any)=>setDetails(e.target.value)} 
                value={details}                
            />
</Col>   
{/* </div>   */}
</Row> 
<Row className="popupfoot">
<Button type="primary"className="savebt" onClick={handle}>Save</Button>
<Button className="cancelbt" onClick={handleCancel}>Cancel</Button>
</Row>       
</Modal>
</Col>    
)      
}   
export default Createflow