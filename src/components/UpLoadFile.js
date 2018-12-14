import React,{Component} from 'react'
import { notification  } from 'antd';
import '../style/upLoadFile.css'

export default class UploadFile extends Component{
	state = {
		name:'',
		path:'',
		preview:null,
		data:null,
		url:''
	}

	changeName = (e) =>{
		 this.setState({ name: e.target.value })
	}

	//上传文件
	upload = () => {
		if(!this.state.url){
			return;
		}
		const data = this.state.data;
        if (!data) {
            notification('error')({
			    message: '错误提示',
			    description: '未选择文件',
			  });
            return;
        }
        const form = new FormData();
         	  form.append('file', data);

	          fetch(this.state.url, {
	            method: 'POST',
	            body: form
	        }).then(res => {
	            console.log(res)
	        })

	}
	//选择文件
	changePath = (e) =>{
		const file = e.target.files[0];
		if (!file) {
            return;
        }

        let src,preview,type=file.type;
        
        if(/^image\/\S+$/.test(type)){
        	//匹配类型为image、开头的字符串
        	src= URL.createObjectURL(file)
        	preview = <img src={src} alt="" />
        	this.setState({url:"/api/v1/vpis/commons/upload/image"})

        }else if(/^video\/\S+$/.test(type)){
        	  // 匹配类型为video/开头的字符串
        	src = URL.createObjectURL(file)
            preview = <video src={src} autoPlay loop controls />
            this.setState({url:"/api/v1/vpis/commons/upload/video"})

        }else if(/^text\/\S+$/.test(type)){
        	  // 匹配类型为text/开头的字符串
        	  
        	   const self = this;
               const reader = new FileReader();
               		 reader.readAsText(file);
                reader.onload = function (e){
                	preview = <textarea value={this.result} readOnly></textarea>
                	self.setState({ path:file.name,data:file,preview:preview})
                }
              return;
        }

         this.setState({ path: file.name, data: file, preview: preview })

	}

	
	cancel = () => {
		 this.props.closeOverlay();
	}
	render(){
		return (
			<div class="upLoadFile">
				<h4>上传文件</h4>
				<div className="row">
					<label>文件名称</label>
					<input type="text" placeholder="请输入文件名" value={this.state.name} onChange={this.changeName}/>
				</div>

				<div className="row">
					<label>文件路径</label>
					
						
						<input type="file"  accept='video/*,image/*,text/plain'  onChange={this.changePath}/>
					
				</div>

				 <div className='media'>
                    {this.state.preview}
                </div>

                <button className='primary upload' onClick={this.upload}>上传</button>
                <button className='primary cancel' onClick={this.cancel}>取消</button>
			</div>
			)
	}
}