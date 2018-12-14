import React,{Component} from 'react'
import {Button,Input Form} from 'antd'
import '../../utility/fetch'
const FormItem = Form.Item;


class Register extends Component{
	registerBtn(){

		fetchRequest('register','POST',{}).then()
	}
	render(){
		return(

				<Form onSubmit={this.handleSubmit}>
					 <FormItem>
					 	{getFieldDecorator('userName',{
					 		rules:[{ type :'iphone' , message : '请填写正确的手机号码'},{required:true,message:'请先填写手机号'}]
					 	}),(
					 		<Input placeholder='手机号'/>
					 	)}
					 </FormItem>

					 <FormItem>
					 	{getFieldDecorator('password',{
					 		rules:[{type:'password',message:'请先设置正确的密码格式'},{required:true,message:'请设置密码'}]
					 	}),(
					 		<Input type="password" placeholder="输入密码" />
					 	)}
					 </FormItem>

					 <FormItem>
						{getFieldDecorator('verification',{
							rules:[{required:true,message:'请先填写验证码'}]
						}),(
							<Input />
						)}
					 </FormItem>

					 <FormItem>
					 	<Button type="primary" htmlType="submit" className="register-form-button" onClick={this.registerBtn.bind(this)}>
                                       注册
                        </Button>
					 </FormItem>

				</Form>
			)
	}
}

const WrappedNormalRegisterForm = Form.create()(RegisterForm);
export default WrappedNormalRegisterForm;