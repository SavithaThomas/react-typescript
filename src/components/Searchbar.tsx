import Cardcomp from "../components/Cardcomp";
import { Col, Row, Input } from "antd";
import { Layout, Menu } from "antd";
import { useState } from 'react';
import { SearchOutlined } from "@ant-design/icons";
const { Header, Content, Sider} = Layout;

const Searchbar = ({cardIndex}:any) => {
    const [isCard, setIsCard] = useState("");
    const handleChange = (e:any) => {
        setIsCard(e.target.value);
        let searchcard=e.target.value;
        let empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);    
        let searchValue = !searchcard ? empdetails : empdetails.filter((card:any) => card.name.toLowerCase().includes(searchcard.toLowerCase()))    
     cardIndex(searchValue) ;   
  };
    return(
    <Col span={8} className="midhead">
    <Input placeholder='Search a workflow'   onChange={handleChange} prefix={<SearchOutlined />} ></Input>
    </Col>
    )

}
export default Searchbar