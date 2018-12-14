import React, { Component } from 'react';
import Login from '../../page/home/login';
import {FullSlip,SlipItem} from "react-fullslip";
import { Modal, Button } from 'antd';


class Introduction extends React.Component{

    constructor(){
        super();
        this.state = { visible: true }
    }

     showModal = () => {
        this.setState({
          visible: true,
        });
      }

      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    
    render(){
         let options = {
            navigation: true,//是否开启导航点,默认为true
            activeClass:'active',//自定义导航点类名,默认为active,.navigation-dot下的.active
            duration:1000,//屏幕滑动切换的时间,默认为1000
            transverse:false,//是否更改为横向滑动,默认为false
            //navImage:[require('./assets/1.jpg'),require('./assets/2.jpg'),require('./assets/3.jpg')],//导航点图片,可选,默认无图片
            arrowNav:false, //是否开启箭头导航 默认false不开启
          };

    	return (
    		<div className="App">
               
              
              <FullSlip {...options}>
                <SlipItem style={{backgroundColor:'#C6E2FF'}}>
                  page1
                </SlipItem>
                <SlipItem style={{backgroundColor:'#C1FFC1'}}>
                  page2
                </SlipItem>
                <SlipItem style={{backgroundColor:'#FFEC8B'}}>
                  page3
                </SlipItem>
              </FullSlip>

            <div><Button type="primary" onClick={this.showModal}>
                    登录
              </Button></div>
          
             <Modal title="登录 Modal" visible={this.state.visible}  onOk={this.handleOk} onCancel={this.handleCancel} okButtonProps={{ disabled: true }} cancelButtonProps={{ disabled: true }} >
                  <Login />
             </Modal>


          </div>
    	)
    } 
}

export default Introduction;