import React from 'react';

export default class D extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hello: 'hello'
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		var c = 'aaa';
		console.log(this);
		console.log(event);
		console.log(c);
	}
	
	render() {
		var a = 1;
		var b = 2;
		return (
			<ul>
				<li>{this.state.hello + a}</li>
				<li onClick={this.handleClick}>{b}</li>
				<li>{this.props.dValue}</li>
			</ul>
		);
	}
}