import React, {Component} from 'react';
class Mytimes extends Component{
	constructor(props){
		super(props)
		this.state = {
			defaultTime:Number(this.props.times)||0,
			values:'时间开始'
		}
	}
	ticks(){
		this.setState({
			defaultTime:this.state.defaultTime+1
		})
	}

	stopTime(){
		this.setState({
		 	values:'时间开始'
		})
		clearInterval(this.interval)
	}

	getTimer(){
		this.interval = setInterval(this.ticks.bind(this),1000)
		this.setState({
		 	values:'时间停止'
		})
	}

	beginTime(){
		if(this.state.values == '时间开始'){
			this.getTimer();
		}else{
			this.stopTime();
		}
	}


	//自动开始，组件渲染完毕
	// componentDidMount(){
	// 	this.interval = setInterval(this.ticks.bind(this),1000)
	// }


	//组件销毁
	componentWillUnmount(){
		clearInterval(this.interval)
	}

	render(){
		return (
			<div>
				现在的时间:<b>{this.state.defaultTime}</b>
				<button onClick = {this.beginTime.bind(this)}>{this.state.values}</button>
			</div>
		)
	}

}

export default Mytimes
