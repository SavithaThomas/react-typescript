
import "antd/dist/antd.css";
import React, {useEffect, useState} from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Headbar from "./Headbar";
import Searchbar from "./Searchbar";
import Card from "../components/Card";
import Cardcomp from "../components/Cardcomp";
import { Col, Row } from 'antd';
// import data from "./data";

import "./Card.css";
import Newcard from "../components/Cardcreate";
const {Content} = Layout;

const Dashboard = ()=> {

    const [cards,setCards]=useState([]);  
    const [loading,setLoading]=useState(false);     
  
    useEffect(() => {
      let empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);
      setCards(empdetails);
      setLoading(false);            
    }, [loading]); 
  
    const refresh = ()=>{
      setLoading(true);  
    }
    const cardIndex = (Card:any) =>{
      console.log('Hai Search: ',Card);
      setCards(Card);
      //setLoading(true);
    }

    function createCard(emp:any)
    {
    return <Cardcomp
    key={emp.id}
    image={emp.image}
    title={emp.name} 
    description={emp.designation} 
    content={emp.det} 
    details={emp.det}
    refresh={refresh}
    cardIndex={cardIndex}
    />
  }
    return (
    <div>
        <Layout>
            <Sidebar />
            <Layout>
            <Headbar refresh={refresh} cardIndex={cardIndex}/>
            <Content className="cardstyle" >
            <div className='cardcompo'>
            <Row>        
            {cards.map((item)=>createCard(item))}         
            </Row>
            </div>           
             </Content>              
            </Layout>            
        </Layout>
    </div>
    );
}

export default Dashboard;

