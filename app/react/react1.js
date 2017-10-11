import React, {Component} from 'react';
import MyOption from './react2.js';

class React1 extends Component{
	constructor(props) {
        super(props);
        this.state = {
          selected:false
        }

    }

    selects(event){
        if(event.target.textContent === this.state.selected){
        this.setState({selected: false});
      }else{
        this.setState({selected: event.target.textContent});
      }
    }
  render() {
           var mySelectStyle = {
               border: '1px solid #999',
               display: 'inline-block',
               padding: '5px',
           };
           return (
               <div style={mySelectStyle}>
                   <MyOption state={this.state.selected} select={this.selects.bind(this)} value="Volvo"></MyOption>
                   <MyOption state={this.state.selected} select={this.selects.bind(this)} value="Saab"></MyOption>
                   <MyOption state={this.state.selected} select={this.selects.bind(this)} value="Mercedes"></MyOption>
                   <MyOption state={this.state.selected} select={this.selects.bind(this)} value="Audi"></MyOption>
               </div>
           );
  }
}

export default React1
