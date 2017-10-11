import React, {Component} from 'react';
class MyOption extends Component{
	constructor(props){
		super(props)
	}
	render(){
		var selectedStyle = {backgroundColor:'red', color:'#fff',cursor:'pointer', border: '1px solid green'};
		var unSelectedStyle = {cursor:'pointer'};
		if(this.props.value === this.props.state){
			return <div style={selectedStyle} onClick={this.props.select}>{this.props.value}</div>;
		}else{
			return <div style={unSelectedStyle} onClick={this.props.select}>{this.props.value}</div>;
		}
	}
}
export default MyOption