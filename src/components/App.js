import React from 'react'

export default class App extends React.Component {
	constructor(props) {
    super(props);
	}

	handleSomething = () => {
	}

	render() {
		return(
			<div>
				<h2>Welcome to Sample React v16 App</h2>
				<h3>This works basis custom webpack config (without using create-react-app)</h3>
			</div>
		)
	}
}