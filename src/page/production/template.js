import React,{Component} from 'react'
import {Row,Col, Steps,Button,Icon,Modal} from 'antd'
import '../../style/template.css'

const Step = Steps.Step;

class Template extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      current: 0,
	      chooseTemplate:0,  //模板类型 0-全屏模式 1-二屏模板 2-三屏模板
	      closeOverlay:false,
	      preview:null,
	      path:null,
	      data:null
	    };
	 }

	  next() {
		    const current = this.state.current + 1;
		    this.setState({ current });
		  }

	  prev() {
	    const current = this.state.current - 1;
	    this.setState({ current });
	  }
	  chooseTemplateBtn(index){
	  	this.setState({chooseTemplate:index})
	  }
	  chooseTypeAddver(){
	  	 this.setState({'closeOverlay':true})
	  }
	  changePath(e){
	  this.setState({'closeOverlay':false})
	  const file = e.target.files[0];
		if (!file) {
            return;
        }

         let src,preview,type=file.type;
         console.log(type)

         if(/^image\/\S+$/.test(type)){
        	//匹配类型为image、开头的字符串
        	src= URL.createObjectURL(file)
        	preview = <img src={src} alt="" />
        	this.setState({url:"/api/v1/vpis/commons/upload/image"})

        }else if(/^video\/\S+$/.test(type)){
        	src = URL.createObjectURL(file)
            preview = <video src={src} autoPlay loop controls />
            this.setState({url:"/api/v1/vpis/commons/upload/video"})
        }
        this.setState({ path: file.name, data: file, preview: preview })

	  }

	render(){
		return(
			<div className="templateContent">

				 <Steps current={this.state.current} key={this.state.current}>
				    <Step title="选着模板" description="" />
				    <Step title="模板填充" description="" />
				    <Step title="完成" description="" />
				  </Steps>

				   <div className="steps-content" className={ this.state.current === 0 ? "activeStepContent" : "steps-content"}>
						<Row >
							<Col span={8} className="chooseTemplate" className={ 0 === this.state.chooseTemplate ? "activeTemplate" : ""} onClick={this.chooseTemplateBtn.bind(this,0)}>
								<Icon type="check" className="check"/>
								<div className="stepContent template-Full">
									可填充视频或图片
								</div>
								<div>全屏模板(默认)</div>
							</Col>
							<Col span={8} className="chooseTemplate"  className={ 1 === this.state.chooseTemplate ? "activeTemplate" : ""} onClick={this.chooseTemplateBtn.bind(this,1)}>
								<Icon type="check" className="check"/>
								<div className="stepContent template-second">
									<p>可填充视频、图片或文字</p>
									<p>可填充视频、图片或文字</p>
								</div>

								<div>二屏模板</div>
							</Col>
							<Col span={8} className="chooseTemplate" className={ 2 === this.state.chooseTemplate ? "activeTemplate" : ""} onClick={this.chooseTemplateBtn.bind(this,2)}>
								<Icon type="check" className="check"/>
								<div className="stepContent template-third">
									<p>可填充视频、图片或文字</p>
									<p>可填充视频、图片或文字</p>
									<p>可填充视频、图片或文字</p>
								</div>
								<div>三屏模板</div>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div className="buttonPlay"><Button type="primary" onClick={this.next.bind(this)}>下一步</Button></div>
							</Col>
						</Row>
				   </div>
				   <div className="steps-content" className={ 1 === this.state.current ? "activeStepContent" : "steps-content"}>
				   		<div>
				   			<div className="fullPageShow" onClick={this.chooseTypeAddver.bind(this)}>
				   				 {this.state.preview ? this.state.preview :'图片，视屏或者文字'}
				   			</div>
				   		</div>
				   		<Row>
							<Col span={24}>
								<div className="buttonPlay">
									<Button type="primary" onClick={this.prev.bind(this)}>上一步</Button>
									<Button type="primary" onClick={this.next.bind(this)}>下一步</Button>
								</div>
							</Col>
						</Row>
				   </div>
				   <div className="steps-content" className={ 2 === this.state.current ? "activeStepContent" : "steps-content"}>

				   		<Row>
							<Col span={24}>
								<div></div>
								<div className="buttonPlay">
									<Button type="primary" onClick={this.prev.bind(this)}>上一步</Button>
									<Button type="primary">完成</Button>
								</div>
							</Col>
						</Row>
				   </div>
				    <div className="steps-content" className={ 3 === this.state.current ? "activeStepContent" : "steps-content"}>

				   		<Row>
							<Col span={24}>
								<div></div>
								<div className="buttonPlay">
									<Button type="primary" onClick={this.prev.bind(this)}>上一步</Button>
									<Button type="primary">完成</Button>
								</div>
							</Col>
						</Row>
				   </div>
				 <Modal visible={this.state.closeOverlay} footer={null}>
				 	<div>
				 		<p></p>
				 		<p><input type="file" accept='video/*' onChange={this.changePath.bind(this)} /></p>
				 		<p><input type="file" accept='image/*' onChange={this.changePath.bind(this)} /></p>
				 	</div>
				 </Modal>
				
			</div>
			)
	}
}

export default Template;