import { Card,Avatar } from 'antd';
import './Card.css';
import "./Sidebar.css";
// import "./media.css"
import { Col, Row } from "antd";
import { useState , useEffect } from 'react';
import { Layout,Menu} from "antd";
import { Input, Button} from "antd";
import { Modal } from "antd";
import values from "./Constants"
import img2 from "./utils/img2.svg";
import { isTemplateSpan } from 'typescript';

const { Content } = Layout;
const { TextArea } = Input;

const Cardcomp=(props:any) => {

  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState(props.title);
  const [desig, setDesig] = useState('');
  const [details,setDetails]=useState('');
   
  const handleClickcard = () => {  
    setIsActive(isActive => !isActive);   
    };
   const [isModal, setIsModalVisible] = useState(false);      
   const handleEdit = () => {    
    console.log('props',props?.title);     
    let empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);    
      for(const item of empdetails) {
        if (item.name==props.title) {   
          item.name=name;     
          item.designation=desig;
          item.det=details;
    }
    }        
    localStorage.setItem('empdetails', JSON.stringify(empdetails));       
    setIsModalVisible(false); 
    props.refresh();        
   };    
   
   const handleDelete = () => {
    
      let empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);    
      for(let index=0;index<empdetails.length;index++) {
        if (props.title==empdetails[index].name) {   
          empdetails = [...empdetails.slice(0, index),...empdetails.slice(index+1)
        ];
    }
    }        
    localStorage.setItem('empdetails', JSON.stringify(empdetails));       
    // setIsModalVisible(false); 
     props.refresh();       
    };     
  
    const showModal = () => {  
    setIsModalVisible(true);   
    };

    const handleOk = () => {  
    setIsModalVisible(false);   
    };
    const handleCancel = () => {  
    setIsModalVisible(false);   
    };
    
return (

<Content style={{ margin: "24px 16px 0" }}>
 <Row  className="rowclass" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> 
   <Col className="gutter-row" span={6}> 
  <Card   className="card1">
    <div className={isActive?"site-card-border-less-wrapper":"hoverdis"} onMouseEnter={handleClickcard}  onClick={handleClickcard} >
      
        <Row>
          <Col span={9}>
            <img src={img2} className="cardImg" alt=" " />
          </Col>
          <Col span={15}>
            <h3 className="cardTitile">{props.title}</h3>
            <p className="cardPara">{props.description}</p>
            <p className="cardSpan">
              {props.content}
            </p>
          </Col>
        </Row>          
      </div>
    <div className={isActive?"hoverdis":"site-card-border-less-wrapper"} onMouseLeave={handleClickcard}  onClick={handleClickcard}>
        <Row>
        <Col span={24}>
        <h3 className="card2">{values.data}</h3>
        <div className="bright">    
        <Button  className="btn5" onClick={handleDelete}>{values.del}</Button>       
        <Button  className="btn4" onClick={showModal}>{values.view}</Button>     
        <Modal   className='viewmodel' centered visible={isModal} footer={null}>
                <Row>
                <Col span={6}>     
                <img src={img2} className="cardImg" alt=" " />                
              </Col>
              <Col span={18}>
            <h3 className="cardTitile">{props.title}</h3>
            <p className="cardPara">{props.description}</p>
            <p className="cardSpan">
              {props.content}
            </p>
            </Col>
            <Col span={6}>                  
              </Col>         

                <Col span={8}>              
                <p className="popup">Employee Name</p>                                
                <p className="popup">Designation </p>                                
                <p className="popup">Employee Details</p>
                </Col>
                <Col span={10}>                   
                <Input className="text" id ="test1"  placeholder={props.title} onChange={(e:any) => setName(e.target.value)}/>                    
                <Input className="text" id="test2"  placeholder={props.description} onChange={(e:any) => setDesig(e.target.value)} />
                <TextArea className="text1"
                               placeholder={props.details}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                                onChange={(e:any)=>setDetails(e.target.value)} 
                            />                  
                </Col>   
           </Row> 
        <Row className="popupfoot">
        <Button type="primary"className="savebt" onClick={handleEdit} >Edit</Button>
        <Button className="cancelbt" onClick={handleCancel}>Cancel</Button>
          </Row>    
      </Modal>
        </div>   
      </Col>
      </Row>    
    </div>
    </Card>
    </Col> 
    </Row>    
  </Content>
);
}

export default Cardcomp;