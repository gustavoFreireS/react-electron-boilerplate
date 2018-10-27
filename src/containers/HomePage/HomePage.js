import React, {Component, Fragment} from "react";
import '../../stylesheets/styles.scss';
class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
      <Fragment>
			<div className='container'>
				<h1>Hello Gustavo, Welcome to your Dashboard</h1>
        <div className='box'>
          <div className='item box__blue'/>
          <div className='item box__red'/>
          <div className='item box__green'/>
          <div className='item box__purple'/>
        </div>
			</div>
      
      </Fragment>
		);
	}
}
export default HomePage;
