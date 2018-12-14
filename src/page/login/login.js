import React from "react";
import { browserHistory  } from 'react-router';
import '../../style/login.css';
import Head from '../../components/Head';
import fetchRequest from '../../utility/fetch'
import { Form, Icon, Input, Button, Tabs,message} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class NormalLoginForm extends React.Component {
    state={
        iphone:''
    };

    //获取用户的手机号
    getIphone(e){
        this.setState({iphone:e.target.value})
    };
    //用户名登录
    handleLoginBtn(e){
        let param = {"agent_area":"310113","password":"123456","phone":"18321084697","sms_code":"888123"};
           fetchRequest('login',"POST",param).then((res) => {  
            //处理 请求success  
                if(res.code === 200 ){  
                     localStorage.token = res.data
                     browserHistory.push('/index')
                        //我们假设业务定义code为0时，数据正常  
                    }else{  
                         //处理自定义异常  
                       // this.doException(json);  
                    }    
            })
       
    };
    //获取登录验证码
    getVerificationCode(e){
        fetchRequest('sendLogin','POST',{phone:this.state.iphone}).then((resp) =>{
            if(resp.code !== 200 ){
                 message.error(resp.message);
            }else{

            }
        })
    }
    //定时器
    setTimeFucnction(val){
        for(let i = 0; i)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                 <Head />
                 <div className="loginWrapp">
                    <h2>登录</h2>
                    <Tabs>
                         <TabPane tab="密码登录" key="0">
                             <Form  className="login-form">
                                 <FormItem>
                                         {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <a className="login-form-forgot" href="">忘记密码</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLoginBtn.bind(this)}>
                                       登录
                                    </Button>

                                    <a href="www.baidu.com">去注册</a>
                                </FormItem>

                            </Form>
                         </TabPane>
                         <TabPane tab="验证码登录" key="1">
                            <Form className="login-code">
                                <FormItem>
                                         {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: '请先填写用户名!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" onChange={this.getIphone.bind(this)}/>
                                  )}
                                </FormItem>

                                <FormItem>
                                    {
                                        getFieldDecorator('verification',{
                                            ruls:[{require:true,message:'请填写验证码'}]，
                                        })(
                                            
                                            <Input placeholder="验证码" />
                                            <Button onClick={this.getVerificationCode.bind(this)}>获取验证码</Button>
                                        )
                                    }
                                </FormItem>
                            </Form>
                         </TabPane>
                    </Tabs>
                   
               </div>
            </div>
          
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;