import fna from './a/a';
import utilFn from './util/util1'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

fna('123');

class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				Hello {this.props.name}
			</div>
		);
	}
}

ReactDOM.render(
	<HelloMessage name="Taylor" />,
	document.getElementById('root')
);