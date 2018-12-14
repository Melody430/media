class Verification extends Component{
	constructor(props){
		super(props)
		this.state={
			nums:props.nums,
			tip:'',
			countDown:'发送验证码',
			status:props.status
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			status:nextProps.status
		});
	}

	componentWillUnmount() {

	  	clearInterval(this.clock);
	  }

	//按钮重置
	resetButton(){
		clearInterval(this.clock);
		this.setState({
			countDown:'发送验证码'
			status:'able',
			nums:this.props.nums //重置时间
		})

		this.props.callback(false,'able');
	}

	handleSend(){
		switch(this.state.status){
			//按钮处于可发送状态并倒计时可发送

			case 'able' :
				//倒计时开始
				this.clock = setInterval(()=>{
					this.doLoop()
				},1000);

			   //状态改变

			   this.setState({
			   		status:'sending',
			   		countDown:`重新发送{this.state.nums}s`
			   })

			  //通知父组件
			  this.props.callback(false,'sending');

			  //发送请求
			  this.props.sendCode();

			  break;
		}

		case 'disable':

		     this.setState({
		     	tips:this.props.disableClick
		     })

		     this.props.callback(this.props.disableClick,false);
		     break;

		 case 'sending' :
		    this.setState({
		    	tips:this.props.sendingClick
		    })

		    this.props.callback(this.props.sendingClick,false);
		    break;

	}

	//倒计时实现

	doLoop(){
		let nums = this.state.nums;
		 	nums--;
		  this.setState({
		  	nums:nums
		  });

		  if( nums > 0 ){
		  	this.setState(countDown:`重新发送{this.state.nums}s`)
		  }else{
		  	this.resetButton();
		  }
	}

	render(){
		return(
			<span id="sendCode" className={"input-group-addon  " + this.state.status} onClick={this.handleSend.bind(this)}>{this.state.countdown}</span>
			)
	}
}

export default Verification;